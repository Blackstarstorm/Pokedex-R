import axios from "axios";

export const getType = async function (value) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${value}`);
  return response.data.pokemon;
}