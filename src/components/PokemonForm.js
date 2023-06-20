import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [newName, setNewName] = useState('')
  const [newHp, setNewHp] = useState('')
  const [newFront, setNewFront] = useState('')
  const [newBack, setNewBack] = useState('')
  const URL = 'http://localhost:3001/pokemon'

  function handleName(e){
    setNewName(e.target.value)
  }

  function handleHP(e){
    setNewHp(e.target.value)
  }

  function handleFront(e){
    setNewFront(e.target.value)
  }

  function handleBack(e){
    setNewBack(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({key: newHp, name: newName, hp: newHp, sprites: {
        front: newFront, 
        back: newBack, 
      }})}).then(response => response.json())
      .then(addPokemon).catch(error => alert(error.message))
  }

  


  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value = {newName}
          onChange = {handleName}
          
          
          />
          <Form.Input fluid label="hp" 
          placeholder="hp" 
          name="hp"
          value = {newHp}
          onChange = {handleHP}
          
          
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {newFront}
            onChange = {handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {newBack}
          onChange = {handleBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
