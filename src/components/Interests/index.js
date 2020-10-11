import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaPlus,
} from 'react-icons/fa';

import Container from './styles';
import Api from '../../services/api';

function Interests() {
  let [interests, setInterests] = useState([]);
  let [value, setValue] = useState('');

  useEffect(() => {
    try {
      Api.get('/interest')
        .then(res => {
          const interests = res.data;
          console.log(interests);
        })
    } catch(err) {
      console.log(err);
    }
  },[])

  const handleSubmit = (e) => {
    try {
      Api.post('/interest', value);
      setInterests([...interests, value])
    } catch(err) {
      console.log(err);
    }
      
    e.preventDefault();
  }

  const handleChange = (e) => {
    let value = e.target.value
    setValue(value);
  }

  return (
    <Container>
      <h1>Meus insteresses</h1>
        { interests.length > 0 ? interests.map((el, index) => <p key={index}>{el}</p>) : <p className='error'>Ops! Parece que você não tem nenhum interesse.</p>}
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='adicionar interesse' value={value} onChange={handleChange}/>
        <button type='submit'><FaPlus/></button>
      </form>
    </Container>
  );
}

export default Interests
