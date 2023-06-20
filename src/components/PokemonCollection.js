import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({display}) {
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}

      {display.map(d => <PokemonCard

      key = {d.id}
      name = {d.name}
      hp = {d.hp}
      sprites = {d.sprites}
      
      
      
      />)}
    </Card.Group>
  );
}

export default PokemonCollection;
