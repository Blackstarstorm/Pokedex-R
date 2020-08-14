import React from 'react';



export default class Types extends React.Component {
  

  render() {
    return (
      <div id="drop_menu">
        
        <h2>Discover more Pokémon by their types</h2>

        <form onSubmit={this.props.handleSubmit}
          onChange={this.props.handleChange}>
          
          <select id="poke-types">

          <option >Select a Pokémon Type</option>
            <option value="normal">Normal</option>
            <option value="fighting" >Fighting</option>
            <option value="flying" >Flying</option>
            <option value="poison" >Poison</option>
            <option value="ground" >Ground</option>
            <option value="rock">Rock</option>
            <option value="bug" >Bug</option>
            <option value="ghost" >Ghost</option>
            <option value="steel" >Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electic</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          
          </select>
        <button id="btn-submit" >Search</button>
        </form>
        
      </div>
    )
  }
}
