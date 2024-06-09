import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import './App.css';
import NavBar from './components/NavBar';
import UserDetails from './views/userDetails/UserDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <NavBar handleSearch={handleSearch}/>
    
      <Routes>
        <Route path="/" element={<Dashboard searchTerm={searchTerm}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;