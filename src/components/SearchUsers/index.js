import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Api from '../../services/api';

import Container from './styles';

function SearchUsers() {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState('');

  //HOOK CHAMADO QUANDO A PÁGINA CARREGA  
  useEffect(() => {
    try {
      Api.get('/profile')
        .then(res => {
          const users = res.data;
          setUsers(users);
        })
    } catch(err) {
      console.log(err);
    }
  },[]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  const handleSubmit = (event) => {
    try {
      //TODO: FAZER A CHAMADA FILTRANDO INTERESSES
      //A VARIAVEL COM O TEXTO DO INPUT SE ACHAMA: search
      axios.get("/profile") 
        .then(res => {
          const users = res.data
          setUsers(users);
        })
    } catch (err) {
      console.log(err);
    }
    
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Procure por quem se interessa pelo mesmo que você</h1>
        <div className='flex'>
          <input type='text' value={search} onChange={handleChange} />
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
