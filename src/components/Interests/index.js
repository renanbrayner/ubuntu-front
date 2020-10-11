import React from 'react';
import {
  FaPlus,
} from 'react-icons/fa';

import Container from './styles';

function Interests() {
  let interests = ["Jogar Bola", "JiuJitsu", "Malhar"];
  //let interests = [];

  const handleSubmit = () => {
    // FAZER CÓDIGO ENVIAR INTERESSE BANCO DE DADOS
  }

  return (
    <Container>
      <h1>Meus insteresses</h1>
        { interests.length > 0 ? interests.map((el) => <p>{el}</p>) : <p className='error'>Ops! Parece que você não tem nenhum interesse.</p>}
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='adicionar interesse'/>
        <button type='submit'><FaPlus/></button>
      </form>
    </Container>
  );
}

export default Interests
