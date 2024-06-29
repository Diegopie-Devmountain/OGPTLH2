import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`).then((res) => {
      // setTimeout is used to simulate a slow server/API
      setTimeout(() => {
        setPokemon(res.data.results);
      }, 1000);
    });
  }, [props.num]);

  const pokemonList = pokemon.map((poke) => <li key={poke.name}>{poke.name}</li>);

  return <ul>{pokemonList}</ul>;
}
