import React from "react";
import { useState } from "react";
import s from "./textField.module.css";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={s.container}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={s.input}
        />
        {type === "password" && (
          <button className={s.btnInput} onClick={toggleShowPassword}>
            {showPassword ? (
              <img src="assets/closeEye.png" alt="Скрыть пароль" />
            ) : (
              <img src="assets/openEye.png" alt="Показать пароль" />
            )}
          </button>
        )}
      </div>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default TextField;
