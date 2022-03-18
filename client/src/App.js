import './scss/all.scss';
import Header from './components/layout/Header';

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
    </div>
  );
};

export default App;
