import React from 'react';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';

function Posts() {
  const posts = [
    {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: 'Hoje fiz uma parada rocheda.',
      time: '10/10/2020 - 11:50'
    },
    {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: 'Hoje fiz uma parada rocheda.',
      time: '10/10/2020 - 11:50'
    },
    {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: 'Hoje fiz uma parada rocheda.',
      time: '10/10/2020 - 11:50'
    },
    {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: 'Hoje fiz uma parada rocheda.',
      time: '10/10/2020 - 11:50'
    },
  ];
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
          if (posts.length > 0) {
            posts.map((post) => {
              return(
                <div className='post'>
                  <div className='user'>
                    <img src={post.userprofile} />
                    <h1>{post.username}</h1>
                  </div>
                  <p>{post.body}</p>
                  <p className='time'>{post.time}</p>
                  {/* ADICIONAR BOTÃO DE VER COMENTARIOS */}
                </div> 
              )}
          } else {
            return <h1>teste</h1>
          }
        )

        }
    </Container>
  );
}

export default Posts;
