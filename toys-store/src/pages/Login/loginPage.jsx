import React, { useState } from "react";
import s from "./loginPage.module.css";
import { useEffect } from "react";
import TextField from "../../components/TextField/textField";
import { validator } from "../../utils/validator";

const LoginPage = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidButton = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) return;

    console.log(data);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h3 className={s.login}>Login</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Электронная почта:"
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label="Пароль:"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button type="submit" disabled={!isValidButton} className={s.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
