import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";


const RestaurantScreen = () => {
    const restaurantArray = [
        {
            name: "Torchy's",
            foodType: "Tacos",
            genre: "fast-casual",
            price: "$",
            outdoorseating: "true",
            noodleHeavy: "false",
        },
        {
            name: "Loro",
            foodType: "Asian BBQ Fusion",
            genre: "sit-down",
            price: "$$$",
            outdoorseating: "true",
            noodleHeavy: "false",
        },
        {
            name: "Ebar",
            foodType: "Tex-Mex",
            genre: "sit-down",
            price: "$$",
            outdoorseating: "",
            noodleHeavy: "false",
        },
        {
            name: "Spice n Rice",
            foodType: "Pakistani",
            genre: "sit-down",
            price: "$$",
            outdoorseating: "",
            noodleHeavy: "true",
        },
        {
            name: "Cava",
            foodType: "Mediterranean",
            genre: "fast-casual",
            price: "$",
            outdoorseating: "",
            noodleHeavy: "false",
        }
    ];

    const [restaurants, setRestaurants] = useState(restaurantArray);
    const [newRestaurant, setNewRestaurant] = useState({ name: "", foodType: "", genre: "" });
    const [generatedRestaurant, setGeneratedRestaurant] = useState("");

    function handleNameChange(event) {
        //this was what i needed!
        setNewRestaurant( {...newRestaurant, name: event.target.value } )
    }

    function handleFoodTypeChange(event) {
        //this was what i needed!
        setNewRestaurant( {...newRestaurant, foodType: event.target.value } )
    }

    function handleGenreChange(event) {
        //this was what i needed!
        setNewRestaurant( {...newRestaurant, genre: event.target.value } )
    }

    function handleAddRestaurant() {
        setRestaurants([...restaurants, newRestaurant]);
        console.log(newRestaurant);
        console.log(restaurants);
    }


    function handlePickRestaurant() {
        setGeneratedRestaurant(restaurants[Math.floor(Math.random()*restaurants.length)]);
    }

    //break out components to other files



    //generate random restuarant 
    //sort by price, outdoor seating, type- and generate from that sublist

    return (
        <div>
            <h2>Restaurant Picker</h2>
            <p>Where should we eat?</p>

            <button type="button" onClick={handlePickRestaurant}>Pick a restaurant for me!</button>

            <h1>{generatedRestaurant.name}</h1>

            <ul>
                {restaurants.map((item, index) => (
                    <li key={index}><b>{item.name}</b>
                        <ul>
                        <li>{item.foodType}</li>
                        <li>{item.genre}</li>
                        </ul>
                    </li>
                ))}
            </ul>

            
            <form>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Add a restaurant:</Form.Label>
                    <Form.Control type="text" value={newRestaurant.name} onChange={handleNameChange} placeholder="name" />
                    <Form.Control type="text" value={newRestaurant.foodType} onChange={handleFoodTypeChange} placeholder="food type" />
                    <Form.Control type="text" value={newRestaurant.genre} onChange={handleGenreChange} placeholder="restaurant genre" />
                    <Button type="button" onClick={handleAddRestaurant}>Add Restaurant</Button>
                </Form.Group>
            </form>

        </div>
    )


}

export default RestaurantScreen;