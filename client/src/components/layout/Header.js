// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import { ImCart } from 'react-icons/im';

// images
import desktopLogo from '../../../public/images/logo_2x.png';
import mobileLogo from '../../../public/images/logo.png';

/**
 * @returns JSX for rendering Header Section
 */
const Header = () => {
  // component states
  const [showMobileMenuOverlay, setShowMobileMenuOverlay] = useState(false);

  return (
    <header className={showMobileMenuOverlay ? 'header open' : 'header'}>
      {/* mobile hamburger menu items */}
      {showMobileMenuOverlay && (
        <div className="overlay hide-in-desktop hide-in-tablet">
          <div className="header__menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      )}

      <section className="header__left-section">
        <nav className="header__left-section__nav-links">
          <ul>
            <li>
              <Link to="/" className="header__left-section__nav-links__logo">
                <img className="hide-in-mobile" src={mobileLogo} alt="logo" />
                <img className="hide-in-tablet" src={desktopLogo} alt="logo" />
              </Link>
            </li>
            <li className="hide-in-mobile">
              <Link to="/">Home</Link>
            </li>
            <li className="hide-in-mobile">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="header__right-section">
        <nav className="header__right-section__nav-links hide-in-mobile">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>

        <div className="header__right-section__cart">
          <ImCart className="header__right-section__cart__icon" />
          <span>0 items</span>
        </div>

        <button
          id="hamburger"
          className="header__hamburger hide-in-tablet"
          onClick={() => setShowMobileMenuOverlay((prevState) => !prevState)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
    </header>
  );
};

export default Header;
