import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gvozdi-app.onrender.com/',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
