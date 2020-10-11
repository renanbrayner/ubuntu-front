import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../styles/Form'

function FormProfile() {
  const history = useHistory();
  
  const handleSubmit = (e) => {
    history.push('/perfil');

    e.preventDefault()
  }

  return (
    <Form>
      <form className='form ' onSubmit={handleSubmit}>
        <div className='flex'>
          <div className='flex-item'>
            <label className='label' htmlFor='age'>
              age
            </label>
            <input
              className='input'
              name='age'
              id='age'
            />
          </div>
          <div className='flex-item'>
            <label className='label' htmlFor='job'>
              job
            </label>
            <input
              className='input'
              name='job'
              id='job'
            />
          </div>
        </div>
        <label className='label' htmlFor='bio'>
          bio
        </label>
        <input
          className='input'
          name='bio'
          id='bio'
        />
        <label className='label' htmlFor='history'>
          history
        </label>
        <input
          className='input'
          name='history'
          id='history'
        />
        <label className='label' htmlFor='technique'>
          technique
        </label>
        <input
          className='input'
          name='technique'
          id='technique'
        />
        <div className='divider' />
        <div className='grid'>
          <div className='grid-item'>
            <label className='label' htmlFor='cep'>
              cep
            </label>
            <input
              className='input'
              name='cep'
              id='cep'
            />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='city'>
              city
            </label>
            <input
              className='input'
              name='city'
              id='city'
            />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='address'>
              address
            </label>
            <input
              className='input'
              name='address'
              id='address'
            />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='state'>
              state
            </label>
            <input
              className='input'
              name='state'
              id='state'
            />
          </div>
        </div>
        <button type='submit' className='submit'>Cadastrar</button>
      </form>
    </Form>
  );
}

export default FormProfile
