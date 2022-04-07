import React from 'react';
import { Button, Form } from 'react-bootstrap';

const PickRestaurant = (props) => {

  function handlePickerClick() {
    let restaurantsLength = props.items.length;
    let randomRestaurantsIndex = Math.floor(Math.random() * restaurantsLength);

    props.onPickRestaurant(randomRestaurantsIndex);
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasic">
        <h2>Where should we eat?</h2>
        <Button type="button" onClick={handlePickerClick}>Restaurant Picker</Button>
      </Form.Group>

      <h4>Eat here: {props.displayPickedRestaurant}</h4>
    </div>
  )



}

export default PickRestaurant;