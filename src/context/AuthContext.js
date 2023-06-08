import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await api.post('signin', { email, password });
      // Зачем я здесь дважды сохраняю данные, в асинксторадж и стейт?
      setUserInfo(res.data.user);
      setUserToken(res.data.token);
      await AsyncStorage.setItem('token', res.data.token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(res.data.user));
    } catch (err) {
      setError('Login failed, try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await api.post('/signup', { email, password });
      setUserInfo(res.data.user);
      setUserToken(res.data.token);
      await AsyncStorage.setItem('token', res.data.token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(res.data.user));
    } catch (err) {
      console.log(`Registration failed: ${err.message}`);
      setError('Registration failed, try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    setError(null);
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const tryLocalSignIn = async () => {
    console.log('Trying local sign in...');
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('token');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
    } catch (error) {
      console.log(`Local sign in failed: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        error,
        setError,
        isLoading,
        userToken,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
