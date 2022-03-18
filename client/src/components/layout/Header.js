// import {  } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <section className="left-section">
        <nav className="nav-links">
          <ul>
            <li>
              <a to="/">
                <img src="/client/public/images/logo_2x.png" alt="logo" />
              </a>
            </li>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/">Products</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="right-section">
        <nav className="nav-links">
          <ul>
            <li>
              <a to="/">Login</a>
            </li>
            <li>
              <a to="/">SignUp</a>
            </li>
          </ul>
        </nav>
        <div className="cart">0 items</div>
      </section>
    </header>
  );
};

export default Header;
