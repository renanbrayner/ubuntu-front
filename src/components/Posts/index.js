import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Api from '../../services/api';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  
  useEffect(() => {
    //get Api.get(ROTA DE LISTAR POSTS)
  },[]);

  const handleSubmit = (e) => {
    setPosts([...posts, value])
    setValue('');
    e.preventDefault()
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Nova conversa</h1>
          <div className='flex'>
            <input type='text' placeholder='Oque você fez hoje?' onChange={handleChange} value={value}/>
            <button type='submit'>iniciar conversa</button>
          </div>
      </form>
        {
          posts.map((post) => {
            return(
              <div className='post'>
                <div className='user'>
                  <img src={profileImg} alt="Paulo Lima"/>
                  <h1>Paulo Lima</h1>
                </div>
                <p className='post-text'>{post}</p>
                  <p className='time'>11/10/2020</p>
                {/* ADICIONAR BOTÃO DE VER COMENTARIOS */}
              </div> 
            )
          }
        )

        }
    </Container>
  );
}

export default Posts;
