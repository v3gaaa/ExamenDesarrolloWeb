import React, { useState } from 'react';

const DescriptionForm = ({ userId }) => {
  const [form, setForm] = useState({
    description: '',
    prescription: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerateHelp = async () => {
    const response = await fetch('http://localhost:3000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: form.description }),
    });

    const data = await response.json();
    setForm({ ...form, prescription: data.prescription });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
    await fetch('http://localhost:3000/api/descriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...form, userId }),
    });
    setForm({ description: '', prescription: '' });
    }
    catch (error) {
      console.error('Error al guardar la descripción:', error);
    }
  };

  return (
    <div className="description-form">
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <button onClick={handleGenerateHelp}>Generar Ayuda</button>
      <textarea
        name="prescription"
        value={form.prescription}
        onChange={handleChange}
        placeholder="Prescripción"
      />
      <button onClick={handleSubmitForm}>Guardar</button>
    </div>
  );
};

export default DescriptionForm;
