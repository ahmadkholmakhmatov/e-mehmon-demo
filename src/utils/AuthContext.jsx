import { createContext, useState } from 'react';
import axiosInstance from './axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const [userData, setUserData] = useState({});

  const login = async (credentials) => {
    try {
      const response = await axiosInstance.post('/account/me/', credentials);
      const { access, refresh } = response.data;

      localStorage.setItem('token', access);
      localStorage.setItem('refresh', refresh);
      setIsAuthenticated(true);

      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setUserData, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
