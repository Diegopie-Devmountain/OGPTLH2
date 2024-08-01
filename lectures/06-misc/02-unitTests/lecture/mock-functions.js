import axios from "axios";
import lodash from 'lodash';

export async function getNthPokemon(n) {
  // n = 2
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

  const nth = response.data.results[n - 1];
  return nth
}

export function doSkillCheck() {
  const roll = lodash.random(1, 20);
 
  return roll >= 10;
}
