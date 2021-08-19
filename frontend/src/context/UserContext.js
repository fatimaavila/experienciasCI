import { createContext, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocaleStorage';
import { useLocalStorageCart } from '../Hooks/useLocaleStorageCart';

import jwt_decode from 'jwt-decode';
import { getAxios } from '../axiosCalls';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token');
  const [tokenContent, setTokenContent] = useLocalStorage('tokenContent');
  const [userInfo, setUserInfo] = useState(null);

  const [cartExperience, setCartExperience] = useLocalStorageCart('infoCart');
  // const [errorToken,setErrorToken] = useState('');
  console.log('cart', cartExperience);

  const logout = useCallback(() => {
    setToken(null);
    setTokenContent(null);
    setUserInfo(null);
    setCartExperience([]);
  }, [setToken, setTokenContent, setCartExperience]);
  console.log(userInfo);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const decoded = jwt_decode(token);
        console.log(decoded);
        setTokenContent(decoded);
        const { data } = await getAxios(
          `http://localhost:8080/users/${decoded.idUser}`,
          token
        );
        console.log(data);
        setUserInfo(data);
      } catch (error) {
        // setErrorToken(error.response.data.message);
        logout();
      }
    };
    if (token) getUserInfo();
  }, [token, setUserInfo, setTokenContent, logout]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        token,
        setToken,
        logout,
        tokenContent,
        setCartExperience,
        cartExperience,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
