import hearth from './hearth.png';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Csak</h1>
        <h2>úgy</h2>
        <h2>Drukk! Drukk! Drukk!</h2>
        <h3><img src={hearth} alt="Cute red hearth" className="App-logo" />
        </h3>
      </div>
    </HashRouter>
  );
}

export default App;
