import React from 'react';

class Pokelist extends React.Component {
  render() {
    // const pokeName = Object.keys(this.props.pokemon).map(pokeId => {
      
    // });
    
    return (
      <div id="poke-list">
        {
          this.props.pokemon.map(poke => (
            <div
              key={poke.pokemon.id}
              className="poke-name"
            >
              <h2 className="name">{poke.pokemon.name}</h2>
              <button onClick={this.modalHandleClick}>More Info</button>
              
              
            </div>
          ))
        }
      </div>
    )
  }
}

export default Pokelist