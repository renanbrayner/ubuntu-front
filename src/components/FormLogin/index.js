import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../styles/Form';

import Api from '../../services/api';

class FormLogin extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state.form;
    const data = { email, password };

    if (!email || !password) {
      alert('Favor preencher todos os dados.');
    }

    try {
      const response = await Api.post('/session', { data });

      console.log(response);
      const { token, user } = response.data;

      Api.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (err) {
      alert('erro: ', err);
    }
  };

  handleChange = (e) => {
    let form = this.state.form;
    form[e.target.name] = e.target.value;

    this.setState({
      form,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <form className='form'>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            name='email'
            type='text'
            id='email'
            onChange={this.handleChange}
          />
          <label className='label' htmlFor='passwd'>
            Senha
          </label>
          <input
            className='input'
            name='password'
            type='password'
            id='password'
            onChange={this.handleChange}
          />
          <button className='submit' type='submit'>
            Entrar
          </button>
          <a className='link' href='#'>
            Esqueceu a senha?{/* Funcionalidade não implementada */}
          </a>
          <div className='divider' />
          <Link className='navigation' to='/cadastro'>
            Cadastrar
          </Link>
        </form>
      </Form>
    );
  }
}

export default FormLogin;
