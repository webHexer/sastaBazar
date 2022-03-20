import React from 'react';
import './scss/all.scss';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import SignUp from './views/SignUp';

const App = () => {
  // const [data, setData] = useState('No response');
  // useEffect(() => {
  //   fetch('http://localhost:8000/')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res.res);
  //       console.log(res.res);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
