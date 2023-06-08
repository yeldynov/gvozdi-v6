import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gvozdi-app.onrender.com/',
});

export default instance;
