import React from 'react';
import Form from './components/Form';
import './Register.css';
import registerSvg from '../../assets/register.svg';

function Register() {
  return (
    <div className="register-container">
      <img src={registerSvg} alt="Registro" className="register-svg" />
      <Form />
    </div>
  );
}

export default Register;
