import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import userImage from '../../../assets/userImage.svg';

const Card = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
    
      <img
        src={userImage}
        alt="avatar"
        className='avatar'
        style={{
          borderRadius: '50%',
          marginRight: '10px',
          width: '50px',
        }}
      />

      <div className='details'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

    </div>
  );
};

export default Card;
