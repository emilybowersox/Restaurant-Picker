import React, { useState } from 'react';
import RestaurantPicker from './RestaurantPicker';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';


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

    
    // const [newRestaurant, setNewRestaurant] = useState({ name: "", foodType: "", genre: "" });


    const [restaurants, setRestaurants] = useState(restaurantArray);
    const [generatedRestaurant, setGeneratedRestaurant] = useState("");

    const handleAddRestaurant = (dataFromForm) => {
        setRestaurants((prevRestaurants) => {
            return   [...restaurants, dataFromForm];
        });
        };

    const handlePickRestaurant = (randomRestaurantsIndex) => {
        setGeneratedRestaurant(restaurants[randomRestaurantsIndex].name);
    }

    return (
        <div>
            <RestaurantList items={restaurants} />
         
            <RestaurantForm onAddRestaurant={handleAddRestaurant} />

            <RestaurantPicker onPickRestaurant={handlePickRestaurant} items={restaurants} displayPickedRestaurant={generatedRestaurant} />
        </div>
    )
        
}

export default RestaurantScreen;