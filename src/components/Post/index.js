import React from 'react';

import Container from './styles';

function Post() {
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
  );
}

export default Post
