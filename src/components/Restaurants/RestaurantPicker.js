import React from 'react';
import { Button, Form } from 'react-bootstrap';

const RestaurantPicker = (props) => {

  function handlePickerClick() {
    let restaurantsLength = props.items.length;
    let randomRestaurantsIndex = Math.floor(Math.random() * restaurantsLength);

    props.onPickRestaurant(randomRestaurantsIndex);
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label><b>Where should we eat?</b></Form.Label>
        <br />
        <Button type="button" onClick={handlePickerClick}>Restaurant Picker</Button>
      </Form.Group>

      <h2>{props.displayPickedRestaurant}</h2>
    </div>
  )



}

export default RestaurantPicker;