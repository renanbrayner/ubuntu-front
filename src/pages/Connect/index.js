import React from 'react';

import Container from './styles';
import SearchUsers from '../../components/SearchUsers'

function Connect() {
  return (
    <Container>
      <div className='search-container'>
        <SearchUsers />
      </div>
      <div className='map-container'>
        <h1>ADICIONAR O MAPA AQUI</h1>
      </div>
    </Container>
  );
}

export default Connect;
