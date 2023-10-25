
import './App.css';

import Header from './client/components/header';
import Intro from './client/components/intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Intro></Intro>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
