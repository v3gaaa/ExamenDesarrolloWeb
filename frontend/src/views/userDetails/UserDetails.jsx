import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import DescriptionForm from './components/DescriptionForm';
import DescriptionList from './components/DescriptionList';
import QuestionInput from './components/QuestionInput';
import DetailsSvg from '../../assets/details.svg';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [id]);

  return (
    <div className="user-details-container">

      <div className="user-details-header">
        <h1>Detalles del usuario</h1>
        <img src={DetailsSvg} alt="Detalles"/>
      </div>

      <div className='forms'>
        {user && <UserInfo user={user} />}
        <DescriptionForm userId={id} />
        <QuestionInput userId={id} />
      </div>

      <div className='desc-list'>
        <DescriptionList userId={id} />
      </div> 
    </div>
  );
};

export default UserDetails;
