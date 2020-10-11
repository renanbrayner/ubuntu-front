import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';

function SearchUsers() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers();
  },[]);

  const handleSubmit = (event) => {
    try {
      axios.get("localhost:3333/profile") 
        .then(res => console.log(res))
    } catch (error) {
      console.log(error);
    }
    
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Procure por quem se interessa pelo mesmo que você</h1>
        <div className='flex'>
          <input type='text' />
          <button type='submit'>Buscar</button>
        </div>
      </form>
        {/*users.map((user) => {
          return (
            <div className='profile'>
              <div className='userinfo'>
                <img src={user.profileImg} alt={user.name} />
                <h1>{user.name}</h1>
              </div>
              <div className='interests'>
                <h1>Interesses:</h1>
                {user.interests.map((interest) => <p>{interest}</p>)}
              </div> 
              <p>{user.distance}</p>
            </div>
          );
        })*/} 
    </Container>
  );
}

export default SearchUsers;
