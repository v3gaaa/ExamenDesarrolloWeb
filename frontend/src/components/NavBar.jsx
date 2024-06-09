import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <nav>
        <Link to="/register">Registro</Link>
        <Link to="/">Dashboard</Link>
        <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
        />
    </nav>
  );
};

export default NavBar;
