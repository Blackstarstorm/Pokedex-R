import React from 'react';

export default function Modal(props) {
  return (
    <div id="modal">
      {/* {
        props.pokemon.map(poke => (
          <img src={} alt="a pokémon spirte"/>
          
        ))
      } */}
      <button onClick={props.closeModal}>Close</button>
    </div>
  )
};
