import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const themePreference = await AsyncStorage.getItem('themePreference');
      if (themePreference) {
        setIsDarkTheme(themePreference === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme preference', error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newThemePreference = isDarkTheme ? 'light' : 'dark';

      await AsyncStorage.setItem('themePreference', newThemePreference);

      setIsDarkTheme(!isDarkTheme);
    } catch (error) {
      console.error('Error saving theme preference', error);
    }
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
};
