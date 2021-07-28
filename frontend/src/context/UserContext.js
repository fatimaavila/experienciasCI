import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../Hooks/Hooks';
import jwt_decode from 'jwt-decode';
import { getAxios } from '../axiosCalls';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token');
  const [tokenContent, setTokenContent] = useLocalStorage('tokenContent');
  const [userInfo, setUserInfo] = useState(null);
  const logout = () => {
    setToken(null);
    setTokenContent(null);
    setUserInfo(null);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const decoded = jwt_decode(token);
      setTokenContent(decoded);
      const { data } = await getAxios(
        `http://localhost:8080/users/${decoded.idUser}`,
        token
      );
      setUserInfo(data);
      console.log('logged', data);
      //decoded.idUser
    };
    if (token) getUserInfo();
  }, [token, setUserInfo, setTokenContent]);

  return (
    <UserContext.Provider
      value={{ userInfo, token, setToken, logout, tokenContent }}
    >
      {children}
    </UserContext.Provider>
  );
};
