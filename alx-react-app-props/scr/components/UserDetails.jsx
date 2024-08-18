import React from 'react';
import { useUserContext } from '../UserContext';

function UserDetails() {
  const userData = useUserContext();

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;