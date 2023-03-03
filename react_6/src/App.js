import './App.css';
import {useState} from "react";

function App() {
  const [arr, setArr] = useState( ['Арген', 'Максат', 'Жанылай'])
  return (
    <div className="App">
      <ul>
        {
          arr.map((i,l) => <li key={l}>{i}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
