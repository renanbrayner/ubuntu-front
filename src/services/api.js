import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ubuntu-back.herokuapp.com/',
});

export default api;
