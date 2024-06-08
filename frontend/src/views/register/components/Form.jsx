import React, { useState } from 'react';
import './Form.css'; // Importamos los estilos CSS

function Form() {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    age: '',
    phone_number: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Error al crear el usuario');
      }

      setForm({
        name: '',
        lastname: '',
        email: '',
        age: '',
        phone_number: '',
        address: ''
      });

      console.log('Usuario creado con éxito');
    } catch (error) {
      console.error('Error al crear el usuario:', error.message);
    }
  };

  return (
    <div className='form'>
      <div className='form-header'>
        <h1>Registro</h1>
      </div>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <input
          className="input-field"
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={form.lastname}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="number"
          name="age"
          placeholder="Edad"
          value={form.age}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="phone_number"
          placeholder="Número de Teléfono"
          value={form.phone_number}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
        />
        
        <div style={{ paddingTop: '5%' }}>
          <button className="submit-button" type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
