import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/RegisterApp'
import RegisterApp from './Components/Register/RegisterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <RegisterApp />
      </header>
    </div>
  );
}

export default App;
