import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../styles/Form';

function FormRegister() {
  return (
    <Form>
      <form className='form'>
        <label className='label' htmlFor='name'>
          Nome
        </label>
        <input 
          className='input'
          name='name'
          type='text'
          id='name'
        />
        <label className='label' htmlFor='email'>
          Email
        </label>
        <input 
          className='input'
          name='email'
          type='text'
          id='email'
        />
        <label className='label' htmlFor='phone'>
          Telefone
        </label>
        <input 
          className='input'
          name='phone'
          type='text'
          id='phone'
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
        <label className='label' htmlFor='repeatPasswd'>
          Repita a senha
        </label>
        <input 
          className='input'
          name='repeatPasswd'
          type='text'
          id='repeatPasswd'
        />
        <button className='submit' type='submit'>Cadastrar</button>
        <Link className='cancel' to='/'>Cancelar</Link>
      </form>
    </Form>
  );
}

export default FormRegister;
