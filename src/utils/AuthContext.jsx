import { createContext, useState } from 'react';
import axiosInstance from './axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeSectionDefault, setActiveSectionDefault] = useState('account');

  const handleSelectSection = (section) => {
    console.log('Setting active section to:', section);
    setActiveSectionDefault(section);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const [userData, setUserData] = useState({});

  const login = async (credentials) => {
    const response = await axiosInstance.post('/account/me/', credentials);
    const { access, user } = response.data;

    localStorage.setItem('token', access);
    localStorage.setItem('id', user.id);

    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        setUserData,
        userData,
        activeSectionDefault,
        handleSelectSection,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
