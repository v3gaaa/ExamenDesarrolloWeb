import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <h2>{user.name} {user.lastname}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserInfo;
