import React, { useEffect, useState } from 'react';

const DescriptionList = ({ userId }) => {
  const [descriptions, setDescriptions] = useState([]);

  const fetchDescriptions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/descriptions/user/${userId}`);
      const data = await response.json();
      setDescriptions(data);
    } catch (error) {
      console.error('Error al obtener descripciones:', error);
    }
  };

  useEffect(() => {
    fetchDescriptions();
  }, [userId]);

  return (
    <div className="description-list">
      <h2>Descripciones</h2>
      {descriptions.map((desc) => (
        <div key={desc.id} className="description-item">
          <p><strong>Descripción:</strong> {desc.description}</p>
          <p><strong>Prescripción:</strong> {desc.prescription}</p>
        </div>
      ))}
    </div>
  );
};

export default DescriptionList;
