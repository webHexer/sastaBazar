// react
import React from 'react';

/**
 * @name Login
 * @returns JSX for Login Page
 */
const Login = () => {
  return (
    <main className="login">
      <section className="login__left-section">
        <h1 className="login__left-section__heading">Login</h1>
        <p className="login__left-section__desc">
          Get access to your Orders, Wishlist and Recommendations
        </p>
      </section>
      <section className="login__right-section">
        <form className="login__right-section__form">
          <input type="text" id="email" name="email" placeholder="Email" />
          <label className="login__right-section__form-label" htmlFor="email">
            Email
          </label>
          <input type="password" id="password" name="password" placeholder="Password" />
          <label className="login__right-section__form-label" htmlFor="password">
            Password
          </label>
          <button className="login__right-section__form__button">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
