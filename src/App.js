import React from 'react';
import './App.css';
import Title from './componenets/Title';
import Hero from './componenets/Hero';
import Types from './componenets/Types';
import Pokelist from './componenets/Pokelist';
import ModalNPM from "react-modal";
import Data from './componenets/Data';
import Footer from './componenets/Footer';
import { getType, getSprite, getShinySprite, getPokeAbilities, getPokeStats } from './services/api-helper';
import PC_On from "./sound/PC Turning On.mp3";
import PC_Logout from "./sound/PC Logout.mp3";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      pokemon: [],
      sprite: "",
      shinySprite: "",
      ability: [],
      stats: [],
      showModal: false
    };

    this.modalHandleClick = this.modalHandleClick.bind(this);
    
    this.modalHandleClickClose = this.modalHandleClickClose.bind(this);
  }
  
//pokemon list by type rendering
  componentDidMount = async () => {
    let pokemon = await getType(this.state.types);
    this.setState({
      types: pokemon
    })
  }
  
/// Pokemon types
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      types: value
    });
  }


  
//Open modal, showing sprites, abilities
  modalHandleClick = async (event) => {
    let name = event.target.id;
    let sprite = await getSprite(name);
    let shinySprite = await getShinySprite(name);
    let ability = await getPokeAbilities(name);
    let stats = await getPokeStats(name);
      this.setState({
        sprite,
        shinySprite,
        ability,
        stats,
        showModal: true
      }); let pcOn = new Audio(PC_On);
      pcOn.play();
    }

  //Close modal
  modalHandleClickClose = async () => {
    this.setState({
      showModal: false
    }); let pcLogout = new Audio(PC_Logout);
    pcLogout.play();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const pokemon = await getType(this.state.types);
    this.setState({
      pokemon: pokemon
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <Title />

        </header>
          <Hero />
        
        <nav>
          <Types
            types={this.state.types}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            
          />
        </nav>

        <section>
          
          <Pokelist
            pokemon={this.state.pokemon}
            openModal={this.modalHandleClick}
            
          />

          <ModalNPM
            isOpen={this.state.showModal}
            contentLabel= "onRequestClose"
            className="Modal"
            ariaHideApp={false}
          >
            <Data
              sprite={this.state.sprite}
              shinySprite={this.state.shinySprite}
              ability={this.state.ability}
              stats={this.state.stats}
            />

            <button className="close" onClick={this.modalHandleClickClose}>Close</button>

          </ModalNPM>
        </section>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
