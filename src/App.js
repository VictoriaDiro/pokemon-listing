import React from 'react';
import PokeList from './components/PokeList';
import PokeSeach from './components/PokeSearch';
import './App.css';
import pokelogo from './img/pokelogo.png';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: [],
      pokeFilter: ''
    }
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/limit=25')
      .then(response => response.json())
      .then(data => data.results.map (item => 
      
        fetch(item.url)
        .then(response => response.json())
        .then(data=>{
          
          this.setState(prevState => {
            const newData = [...this.state.dataList, {pokemon: data}]
            return {pokeData: newData}
          });
        })
      ))
    }

    

handleChangeFilter(event) {
  const currentValue = event.currentTarget.value;

  this.setState({
    value: currentValue
  })
}

  render() {
    const {pokeData, value} = this.state;

    return (
      <div className="App">

          <img src={pokelogo} alt="pokelogo" className="pokelogo"/>
        
          <PokeSeach
            handleChangeFilter = {this.handleChangeFilter}
          />
          <PokeList
            pokeData = {pokeData}
            value = {value}
          />

      </div>
    );
  }
}

export default App;
