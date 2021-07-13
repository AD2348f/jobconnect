import React, { createContext, useState, useEffect } from 'react';
import cookies from 'js-cookie';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = 'https://jobconnect-try.herokuapp.com/auth';
// https://jobconnect-try.herokuapp.com/auth

const AuthContextProvider = ({ children }) => {
  const userToken = cookies.get('token');
  const [me, setMe] = useState({});
  const [authToken, setAuthToken] = useState(userToken);
  const [error, setError] = useState(false);

  /*useEffect(() => {
    if (userToken)  fetchLogin()
  }, []);*/

  useEffect(() => {
    if (authToken)  fetchLogin()
  }, [authToken]);

  const isLoggedIn = () => {
    return authToken ? true : false;
  }

  const fetchLogin = async() => {
    await axios.get(`${API_URL}/me`,{headers:{Authorization: `Bearer ${authToken}`}})
    .then((response) => setMe(response.data.data))
    .catch((error) => console.log(error));
  }  

  const setCookieOrError = (res) => {
    const { status, data } = res;

    if (status === 200) {
      const { token } = data;
      cookies.set("token", token);
      setAuthToken(token);
    } else {
      setError(true);
    } 
  }

  const login = ({ password, email }) => {
    axios
      .post(`${API_URL}/login`, { password, email })
      .then((res) => setCookieOrError(res))
      .catch((err) => setError(true))
  }

  const register = ({ username, password, email, role }) => {
    axios
      .post(`${API_URL}/register`, { username, password, email, role })
      .then((res) => setCookieOrError(res))
      .catch((err) => setError(true))
  };

  const logout = () => {
    cookies.remove('token');
    setAuthToken('');
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isLoggedIn,
        login,
        register,
        logout,
        me
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;