import axios from 'axios';
import lodash from 'lodash';

export async function getNthPokemon(n) {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return res.data.results[n - 1];
}

export function doSkillCheck() {
  const roll = lodash.random(1, 20);
  return roll >= 10;
}
