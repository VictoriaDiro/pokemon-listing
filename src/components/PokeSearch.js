import React from 'react';

class PokeSearch extends React.Component {
  render() {
    const { pokeFilter, handleChangeFilter } = this.props;
    return (
      <div className="pokesearch__container">
        <label htmlFor="input__pokeserach" className="pokesearch__label">Busca tu pokémon</label>
        <input
          id="input__pokeserach"
          className="input__pokeserach"
          type="text"
          placeholder="Pikachu"
          value = {pokeFilter}
          onChange = {handleChangeFilter}
        />
      </div>
    )
  }
}

export default PokeSearch;