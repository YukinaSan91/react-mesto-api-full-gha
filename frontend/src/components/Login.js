import React, { useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Login({ onLogin }) {
  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password);
    resetForm();
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">Вход</h2>
        <form className="login__form" name="login" onSubmit={handleSubmit}>
          <input
            id="email"
            className="login__text"
            name="email"
            type="email"
            placeholder="Email"
            minLength="2"
            required
            onChange={handleChange}
            value={values.email || ""}
          />
          <span
            className="input-email-error login__text-input-error"
            type="text"
          >{errors.email}</span>
          <input
            id="password"
            className="login__text"
            name="password"
            type="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="16"
            required
            onChange={handleChange}
            value={values.password || ""}
          />
          <span
            className="input-password-error login__text-input-error"
            type="text"
          >{errors.password}</span>
          <div className="login__button-container">
            <button className="login__button" type="submit" disabled={isValid?false:true}>
              Войти
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
