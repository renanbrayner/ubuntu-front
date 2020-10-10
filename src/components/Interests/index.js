import React from 'react';
import {
  FaPlus,
} from 'react-icons/fa';

import Container from './styles';

function Interests() {
  let interests = ["Jogar Bola", "JiuJitsu", "Malhar"];

  return (
    <Container>
      <h1>Meus insteresses</h1>
      { interests.map((el) => <p>{el}</p>) }
      <form>
        <input type='text' placeholder='adicionar interesse'/>
        <button type='submit'><FaPlus/></button>
      </form>
    </Container>
  );
}

export default Interests
