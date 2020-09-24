import React from 'react';

import Normal from "../sound/ORASPetalburgCity.mp3";
import Fighting from "../sound/HGSSKantoGymLeader.mp3";
import Flying from "../sound/BWMistraltonCity.mp3";
import Poison from "../sound/SWSHKlara.mp3";
import Ground from "../sound/BWDriftveilCity.mp3";
import Rock from "../sound/GSCUnionCave.mp3";
import Bug from "../sound/SMGuzma.mp3";
import Ghost from "../sound/B2W2StrangeHouse.mp3";
import Steel from "../sound/B2W2Colress.mp3";
import Fire from "../sound/B2W2ReversalMountainW2.mp3";
import Water from "../sound/BWUndellaTown.mp3";
import Grass from "../sound/DPPEternalForest.mp3";
import Electric from "../sound/SMDimensionalResearchLab.mp3";
import Psychic from "../sound/ORASDeoxys.mp3";
import Ice from "../sound/SWSHCirchester.mp3";
import Dragon from "../sound/BWZekrom&Reshiram.mp3";
import Dark from "../sound/SWSHSpikemuth.mp3";
import Fairy from "../sound/SWSHBallonlea.mp3";

export default class Types extends React.Component {
    normal = new Audio(Normal);
    fighting = new Audio(Fighting);
    flying = new Audio(Flying);
    poison = new Audio(Poison);
    ground = new Audio(Ground);
    rock = new Audio(Rock);
    bug = new Audio(Bug);
    ghost = new Audio(Ghost);
    steel = new Audio(Steel);
    fire = new Audio(Fire);
    water = new Audio(Water);
    grass = new Audio(Grass);
    electric = new Audio(Electric);
    psychic = new Audio(Psychic);
    ice = new Audio(Ice);
    dragon = new Audio(Dragon);
    dark = new Audio(Dark);
    fairy = new Audio(Fairy);
  
  playMusic = async () => {
    if (this.props.types === "normal") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.normal.play(); 
    } else if (this.props.types === "fighting") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.fighting.play();
    } else if (this.props.types === "flying") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.flying.play();
    } else if (this.props.types === "poison") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.poison.play();
    } else if (this.props.types === "ground") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();    
    this.dark.load();
    this.fairy.load();
    this.ground.play();
    } else if (this.props.types === "rock") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.rock.play();
    } else if (this.props.types === "bug") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.bug.play();
    } else if (this.props.types === "ghost") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.ghost.play();
    } else if (this.props.types === "steel") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.steel.play();
    } else if (this.props.types === "fire") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.fire.play();
    } else if (this.props.types === "water") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.water.play();
    } else if (this.props.types === "grass") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.grass.play();
    } else if (this.props.types === "electric") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.electric.play();
    } else if (this.props.types === "psychic") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.psychic.play();
    } else if (this.props.types === "ice") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.ice.play();
    } else if (this.props.types === "dragon") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.dragon.play();
    } else if (this.props.types === "dark") {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.dark.play();
    } else {
    this.normal.load();
    this.fighting.load();
    this.flying.load();
    this.poison.load();
    this.ground.load();
    this.rock.load();
    this.bug.load();
    this.ghost.load();
    this.steel.load();
    this.fire.load();
    this.water.load();
    this.grass.load();
    this.electric.load();
    this.psychic.load();
    this.ice.load();
    this.dragon.load();
    this.dark.load();
    this.fairy.load();
    this.fairy.play();
    }
  }

  
  render() {
    return (
      <div id="drop_menu">
        
        <h2>Discover more Pokémon by their types</h2>


        <form onSubmit={this.props.handleSubmit}
        >
          <select id="poke-types" onChange={this.props.handleChange}>

          <option value=""  hidden>Select a Pokémon Type</option>
            <option value="normal" >Normal</option>
            <option value="fighting"
            >Fighting</option>
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
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          
          </select>
          
          <button id="btn-submit" onClick={async () => await this.playMusic()}>
            Search</button>
            
        </form>
        
      </div>
    )
  }
}
