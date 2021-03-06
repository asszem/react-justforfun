import hearth from './hearth.png';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>No Dráma</h1>
        <h1>minden rendben lesz</h1>
        <div className="hearts">
        <img src={hearth} alt="Cute red hearth" className="App-logo" />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
