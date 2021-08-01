import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocaleStorage';
import jwt_decode from 'jwt-decode';
import { getAxios } from '../axiosCalls';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token');
  const [tokenContent, setTokenContent] = useLocalStorage('tokenContent');
  const [userInfo, setUserInfo] = useState(null);
  // const [errorToken,setErrorToken] = useState('');

  const logout = useCallback(() => {
    setToken(null);
    setTokenContent(null);
    setUserInfo(null);
  }, [setToken, setTokenContent]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const decoded = jwt_decode(token);
        setTokenContent(decoded);
        const { data } = await getAxios(
          `http://localhost:8080/users/${decoded.idUser}`,
          token
        );
        setUserInfo(data);
        console.log('logged', data);
        //decoded.idUser
        console.log(userInfo);
      } catch (error) {
        // setErrorToken(error.response.data.message);
        logout();
      }
    };
    if (token) getUserInfo();
  }, [token, setUserInfo, setTokenContent, logout]);
  return (
    <UserContext.Provider
      value={{ userInfo, token, setToken, logout, tokenContent }}
    >
      {children}
    </UserContext.Provider>
  );
};
