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
        <Button type="button" onClick={handlePickerClick}>Pick for me!</Button>
      </Form.Group>

      <p>Eat here:</p>
      <h1>{props.displayPickedRestaurant}</h1>
    </div>
  )



}

export default PickRestaurant;