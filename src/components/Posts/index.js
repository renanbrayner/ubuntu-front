import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Api from '../../services/api';

import Post from '../Post';
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
      <form className='form' onSubmit={handleSubmit}>
        <h1>Nova conversa</h1>
          <div className='flex'>
            <input type='text' placeholder='Oque você fez hoje?' onChange={handleChange} value={value}/>
            <button type='submit'>iniciar conversa</button>
          </div>
      </form>
        {
          posts.map((post) => {
            return <Post profileImg={profileImg} post={post}/>
          }
        )

        }
    </Container>
  );
}

export default Posts;
