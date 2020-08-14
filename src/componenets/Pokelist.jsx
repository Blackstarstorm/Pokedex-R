import React from 'react';

class Pokelist extends React.Component {
  render() {
    return (
      <div id="poke-list">
        {
          this.props.pokemon.map(poke => (
            <div key={poke.id}>
              <h2>{poke.name}</h2>
              <button>More Info</button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Pokelist