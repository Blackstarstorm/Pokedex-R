import axios from "axios";

export const getType = async function (value) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${value}`);
  return response.data.pokemon;
}

export const getSprite = async function (name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data.sprites.front_default;
}
// response.data.sprites.front_default