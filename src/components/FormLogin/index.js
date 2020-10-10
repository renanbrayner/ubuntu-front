import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../styles/Form';

function FormLogin() {
  return (
    <Form>
      <form className='form'>
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input 
          className='input'
          name='email'
          type='text'
          id='email'
        />
        <label className='label' htmlFor='passwd'>
          Senha
        </label>
        <input 
          className='input'
          name='passwd'
          type='text'
          id='passwd'
        />
        <button className='submit' type='submit'>Entrar</button>
        <a className='link' href='#'>Esqueceu a senha?{/* Funcionalidade não implementada */}</a>
        <div className='divider'/> 
        <Link className='navigation' to='/cadastro'>
          Cadastrar
        </Link>
      </form>
    </Form>
  );
}

export default FormLogin;
