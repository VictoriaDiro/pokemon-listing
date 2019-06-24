import React from 'react';
// import fetchPokeDetail from '../../services/PokeServer';

class PokeDetail extends React.Component {
  render() {
    const { pokeData } = this.props;
    console.log(pokeData)
    // if (pokeData.length === 25) {
      // const pokeName = this.props.match.params.name;
      // const item = pokeData.find(item => item.name === pokeName);

    return (
      <div className="poke__item">
        {pokeData.map((poke) => (
          <p className="poke__name">{poke.name}</p>
          
        ))}
        <div className="poke__image-container">
          {/* <img src={match.params.item.sprites.front_default} alt={match.params.item.name} className="poke__image"/> */}
          {/* <p className="poke__name">{item.name}</p> */}
          {/* <p className="poke__number">ID / {item.id}</p> */}
        </div>

        {/* <div className="poke__info-container">
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
        </div> */}
      </div>
    )}
  }
// }

export default PokeDetail;