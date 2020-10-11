import React from 'react';

import Container from './styles';
import SearchUsers from '../../components/SearchUsers'
import Sidebar from '../../components/Sidebar';

function Connect() {
  return (
    <Container>
      <Sidebar />
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
