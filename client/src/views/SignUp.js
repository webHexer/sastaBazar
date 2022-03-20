// react
import React from 'react';

/**
 * @name SignUp
 * @returns JSX for SignUp Page
 */
const SignUp = () => {
  return (
    <main className="signup">
      <section className="signup__left-section">
        <h1 className="signup__left-section__heading">SignUp</h1>
        <p className="signup__left-section__desc">
          We do not share your personal details with anyone.
        </p>
      </section>
      <section className="signup__right-section">
        <form className="signup__right-section__form">
          <input type="text" id="fName" name="fName" placeholder="First Name" />
          <label className="signup__right-section__form-label" htmlFor="fName">
            First Name
          </label>
          <input type="text" id="lName" name="lName" placeholder="Last Name" />
          <label className="signup__right-section__form-label" htmlFor="lName">
            Last Name
          </label>
          <input type="text" id="email" name="email" placeholder="Email" />
          <label className="signup__right-section__form-label" htmlFor="email">
            Email
          </label>
          <input type="password" id="password" name="password" placeholder="Password" />
          <label className="signup__right-section__form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <label className="signup__right-section__form-label" htmlFor="password">
            Confirm Password
          </label>
          <button className="signup__right-section__form__button">SignUp</button>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
