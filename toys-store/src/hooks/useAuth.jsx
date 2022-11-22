import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import userService from "../services/user.services";
import { useState } from "react";
import { setTokens } from "../services/localStorage.service";
import localStorageService from "../services/localStorage.service";
import { useHistory } from "react-router-dom";

export const httpAuth = axios.create();
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  console.log(currentUser);

  async function logIn({ email, password }) {
    const key = "AIzaSyCcRSNAIxv-ODIQ-jXdBUPMaAaDEi39BgI";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

    try {
      const { data } = await httpAuth.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      getUserData();
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === "INVALID_PASSWORD") {
          throw new Error("Email или пароль введены не корректно");
        }
      }
    }
  }

  function logout() {
    localStorageService.removeAuthData();
    setCurrentUser(null);
    history.push("/toys");
  }

  async function signUp({ email, password, name }) {
    const key = "AIzaSyCcRSNAIxv-ODIQ-jXdBUPMaAaDEi39BgI";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    try {
      const { data } = await httpAuth.post(url, {
        email,
        password,
        name,
        returnSecureToken: true,
      });
      setTokens(data);

      await createUser({ id: data.localId, email, name });
    } catch (error) {
      errorCatcher(error);

      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким Email уже существует",
          };
          throw errorObject;
        }
      }
    }
  }

  async function createUser(data) {
    try {
      const { content } = userService.create(data);
      setCurrentUser(content);
    } catch (error) {
      errorCatcher();
    }
  }

  function errorCatcher(error) {
    const { message } = error.response?.data;
    setError(message);
  }

  async function getUserData() {
    try {
      const user = await userService.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ signUp, currentUser, logIn, logout }}>
      {!isLoading ? children : "Loading..."}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
