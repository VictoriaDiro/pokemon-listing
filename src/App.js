import React from 'react';
import fetchPokeList from '../src/services/PokeServer';
import PokeList from './components/PokeList';
import PokeSeach from './components/PokeSearch';
import './App.css';
import pokelogo from './img/pokelogo.png';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokeData: [],
      pokeNameFilter: '',
      isLoading: true
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  componentDidMount() {
    this.getPokeFetch ();
  }

  getPokeFetch () {
    fetchPokeList()
      .then(data => {
        const { results } = data;
        results.map(item => {

          return fetch(item.url)
            .then(res => res.json())
            .then(pokeList => {

              console.log(pokeList)
              
              this.setState(state => {
                return {
                  list: [...state.list.sort((a, b) => a.id - b.id), pokeList],
                  isLoading: false
                  
                };
              });
            });
        });
      });
    }

handleChangeFilter(event) {
  const currentValue = event.currentTarget.value;

  this.setState({
    pokeNameFilter: currentValue
  });
}

  render() {
    const { list, pokeList, isLoading } = this.state;

    return (
      <div className="app__container">

        <header className="header__container">
          <img src={pokelogo} alt="pokelogo" className="pokelogo"/>
        </header>

        {isLoading ? (
          <p className="loading__text">Loading...</p>
        ) : (
          <main className="main__container">
            <PokeSeach
              handleChangeFilter = {this.handleChangeFilter}
            />
            <PokeList
              list = {list}
              pokeList = {pokeList}
              handleChangeFilter = {this.handleChangeFilter}
              pokeNameFilter = {this.pokeNameFilter}
            />
          </main>
        )}

          <footer className="footer__container">
            <p className="footer__text">Made with love by Victoria Diro with HTML, CSS, ReactJs</p>
          </footer>
      </div>
    );
  }
}

export default App;
