
import './App.css';

import Header from './client/components/header';
import Intro from './client/components/intro';
import Bio from './client/components/bio';
import Produced from './client/components/produced_music/produced';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Intro></Intro>
        <Bio></Bio>
        <Produced></Produced>
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
