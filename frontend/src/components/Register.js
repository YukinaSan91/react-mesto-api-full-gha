import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useFormAndValidation"

function Register({ onRegister }) {
  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    onRegister(email, password);
    resetForm();
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__heading">Регистрация</h2>
        <form className="login__form" name="register" onSubmit={handleSubmit} noValidate>
          <input
            id="input-email"
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
            id="input-password"
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
              Зарегистрироваться
            </button>
            <p className="login__send-text">
              Уже зарегистрированы?&nbsp;
              <Link to="/sign-in" className="login__send-link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
