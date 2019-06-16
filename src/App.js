import React from 'react';
import PokeList from './components/PokeList';
import PokeSeach from './components/PokeSearch';
import './App.css';

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(response => response.json())
  .then(data => {
    
  })

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PokeSeach></PokeSeach>
          <PokeList></PokeList>
        </header>
      </div>
    );
  }
}

export default App;
