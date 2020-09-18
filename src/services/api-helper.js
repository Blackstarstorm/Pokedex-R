import axios from "axios";

export const getType = async function (value) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${value}`);
  return response.data.pokemon;
}

export const getSprite = async function (name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data.sprites.front_default;
}

export const getShinySprite = async function (name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data.sprites.front_shiny;
}

export const getPokeAbilities = async function (name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data.abilities;
}

export const getPokeStats = async function (name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data.stats;
}