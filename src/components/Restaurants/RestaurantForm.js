import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";

const RestaurantForm = (props) => {
 
    const [newRestaurant, setNewRestaurant] = useState({ name: "", foodType: "", genre: "", price: "" });

    function handleNameChange(event) {
        //this was what i needed!
        setNewRestaurant( {...newRestaurant, name: event.target.value } )
    }

    function handleFoodTypeChange(event) {
        setNewRestaurant( {...newRestaurant, foodType: event.target.value } )
    }

    function handleGenreChange(event) {
        setNewRestaurant( {...newRestaurant, genre: event.target.value } )
    }

    function handlePriceChange(event) {
        setNewRestaurant( {...newRestaurant, price: event.target.value } )
    }


    function handleSaveRestaurant() {
        const newRestaurantData = {
            name:newRestaurant.name,
            foodType: newRestaurant.foodType,
            genre: newRestaurant.genre,
            price: newRestaurant.price
        }

        props.onAddRestaurant(newRestaurantData);
        setNewRestaurant( { name: "", foodType: "", genre: "", price: "" } );
    }


    return (
        <div>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label><b>Add a restaurant:</b></Form.Label>
                    <Form.Control type="text" value={newRestaurant.name} onChange={handleNameChange} placeholder="name" />
                    <Form.Control type="text" value={newRestaurant.foodType} onChange={handleFoodTypeChange} placeholder="food type" />
                    <Form.Control type="text" value={newRestaurant.genre} onChange={handleGenreChange} placeholder="restaurant genre" />
                    <Form.Control type="text" value={newRestaurant.price} onChange={handlePriceChange} placeholder="price" />
                    <br />
                    <Button type="button" onClick={handleSaveRestaurant}>Add Restaurant</Button>
                </Form.Group>
        </div>
    )

}

export default RestaurantForm;