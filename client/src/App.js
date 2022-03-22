// react
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/layout/Header';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import SignUp from './views/SignUp';

// scss
import './scss/all.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Route path="*" element={<NoPage />} /> */}
    </div>
  );
};

export default App;
