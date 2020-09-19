import React from 'react';

class Pokelist extends React.Component {
  render() {
    
    return (
      <div id="poke-list">
        {
          this.props.pokemon.map(poke => (
            <div
              key={poke.pokemon.name}
              className="poke-name"
            >
              <h2 className="name">{poke.pokemon.name}</h2>
              <button id={poke.pokemon.name} className="more-info"
                onClick={this.props.openModal}>More Info</button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Pokelist