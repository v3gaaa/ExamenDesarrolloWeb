import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './Dashboard.css';
import userSvg from '../../assets/user.svg';

const Dashboard = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const redirectRegister = () => {
    window.location.href = '/register';
  }

  return (
    <div className="dashboard-container">
      <div className="user-list">
        <div className="user-list-header">
          <h1>Usuarios</h1>
        </div>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <Card user={user} />
          </div>
        ))}
      </div>
      <div className="user-svg">
        <button onClick={redirectRegister} className="submit-button">
          Agregar Usuario
        </button>
        <img src={userSvg} alt="Usuarios" />
      </div>
    </div>
  );
};

export default Dashboard;
