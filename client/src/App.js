// react
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/layout/Header';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Footer from './components/layout/Footer';

// scss
import './scss/all.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
      {/* <Route path="*" element={<NoPage />} /> */}
    </div>
  );
};

export default App;
