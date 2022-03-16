import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return <div className="App">hii</div>;
}

export default App;
