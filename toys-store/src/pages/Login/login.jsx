import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "./../../components/Form/LoginForm/loginForm";
import RegisterForm from "./../../components/Form/RegisterForm/registerForm";
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <h3 className="mb-4">Register</h3>
              <RegisterForm />
              <p>
                Уже есть аккаунт?{" "}
                <a role="button" onClick={toggleFormType}>
                  {" "}
                  Войдите в него
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Login</h3>
              <LoginForm />
              <p>
                Нет аккаунта?{" "}
                <a role="button" onClick={toggleFormType}>
                  {" "}
                  Зарегестрируйтесь
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
