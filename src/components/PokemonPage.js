import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const URL = 'http://localhost:3001/pokemon'
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then(pokemons => setPokemons(pokemons))
  }, [])

  const display = pokemons.filter(pokemon => pokemon.name.includes(searchTerm))

  function addPokemon(info){
    setPokemons([...pokemons, info])
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon = {addPokemon}/>
      <br />
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <br />
      <PokemonCollection display = {display}/>
    </Container>
  );
}

export default PokemonPage;
