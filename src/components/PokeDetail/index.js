import React, { Fragment } from 'react';
import fetchPokeDetail from '../../services/PokeServer';

console.log({fetchPokeDetail});


class PokeDetail extends React.Component {
  render() {
    const { match, pokeData } = this.props;
    if (pokeData.length === 25) {
      const pokeName = this.props.match.params.name;
      const item = pokeData.find(item => item.name === pokeName);

      console.log({pokeData});

    return (

      <Fragment>

        {pokeData.map((poke) => (
          <div className="poke__item">

            <div className="poke__image-container">
              <img src={item.sprites.front_default} alt={poke.name} className="poke__image"/>
              <img src={match.params.item.sprites.front_default} alt={match.params.item.name} className="poke__image"/>
              <p className="poke__name">{poke.name}</p>
              <p className="poke__number">ID / {poke.id}</p>
            </div>

          <div className="poke__info-container">
            <h2 className="poke__name">{item.name}</h2>
            <div className="poke__types-container">
              <ul className="poke__types">
                {item.types.map((type, index) => (
                  <li className="poketype__item" key={index}>{type.type.name}</li>
                ))}
              </ul>
              <h3 className="poke__height">{item.name}</h3>
              <h3 className="poke__weight">{item.name}</h3>
              <h3 className="poke__habilities">{item.name}</h3>
              <h3 className="poke__images">{item.name}</h3>
              <h3 className="poke__evolution">{item.name}</h3>
            </div>
          </div>

        </div>

        ))}
      </Fragment>

    )}
  }
}

export default PokeDetail;