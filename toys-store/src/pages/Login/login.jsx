import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./../../components/Form/LoginForm/loginForm";
import RegisterForm from "./../../components/Form/RegisterForm/registerForm";
import s from "./login.module.css";
const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };
  return (
    <div className={s.container}>
      <div className={s.content}>
        {formType === "register" ? (
          <>
            <h3 className={s.title}>Register</h3>
            <RegisterForm />
            <p>
              Уже есть аккаунт?{" "}
              <i>
                <a className={s.anchor} role="button" onClick={toggleFormType}>
                  Войдите в него
                </a>
              </i>
            </p>
          </>
        ) : (
          <>
            <h3 className={s.title}>Login</h3>
            <LoginForm />
            <p>
              Еще нет аккаунта?{" "}
              <i>
                <a role="button" className={s.anchor} onClick={toggleFormType}>
                  Зарегистрируйтесь
                </a>
              </i>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
