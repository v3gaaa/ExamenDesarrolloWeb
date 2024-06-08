import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import './App.css';
import UserDetails from './views/userDetails/UserDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;