import React from 'react';

class Pokelist extends React.Component {
  render() {
    return (
      <div id="poke-list">
        {
          this.props.pokemon.map(poke => (
            <div
              key={poke.id}
              className="poke-name"
            >
              <h2>{poke.pokemon.name}</h2>
              <button>More Info</button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Pokelist