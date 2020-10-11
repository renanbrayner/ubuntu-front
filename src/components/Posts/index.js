import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Api from '../../services/api';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';

function Posts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    //get Api.get(ROTA DE LISTAR POSTS)
  },[]);

  return (
    <Container>
      <form>
        <h1>Nova conversa</h1>
          <div className='flex'>
            <input type='text' placeholder='Oque você fez hoje?' />
            <button type='submit'>iniciar conversa</button>
          </div>
      </form>
        {
          posts.map((post) => {
            return(
              <div className='post'>
                <div className='user'>
                  <img src={post.userprofile} alt={post.username}/>
                  <h1>{post.username}</h1>
                </div>
                <p>{post.body}</p>
                <p className='time'>{post.time}</p>
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
