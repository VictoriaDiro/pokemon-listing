import React from 'react';
import './styles.scss';

class PokeSearch extends React.Component {
  render() {
    const { pokeFilter, handleChangeFilter } = this.props;
    return (
      <div className="pokesearch__container">
        <input
          id="input__pokeserach"
          className="input__pokeserach"
          type="text"
          placeholder="Filtra pokemons por nombre..."
          value = {pokeFilter}
          onChange = {handleChangeFilter}
        />
      </div>
    )
  }
}

export default PokeSearch;