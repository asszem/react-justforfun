import hearth from './hearth.png';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Csak</h1>
        <h2>úgy ma is :D</h2>
        <h2>Drukk! Drukk! Drukk!</h2>
        <div className="hearts">
        <img src={hearth} alt="Cute red hearth" className="App-logo" />
        <img src={hearth} alt="Cute red hearth" className="App-logo" />
        <img src={hearth} alt="Cute red hearth" className="App-logo" />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
