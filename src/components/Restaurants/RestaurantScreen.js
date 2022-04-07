import React, { useState } from 'react';
import PickRestaurant from './PickRestaurant';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';
import FilterRestaurants from './FilterRestaurants'

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
    // const [filterCriteria, setFilterCriteria] = useState("");
    // const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    const [generatedRestaurant, setGeneratedRestaurant] = useState("");

    const handleAddRestaurant = (dataFromForm) => {
        setRestaurants((prevRestaurants) => {
            return [...restaurants, dataFromForm];
        });
    };

    // const handleFilterCriteria = (dataFromFilter) => {
    //     setFilterCriteria(dataFromFilter);
    //     console.log("filter criteria: ", filterCriteria);
    // }
    // (goes in RestaurantFilters component)
    //onFilterCriteria={handleFilterCriteria} 

    const handlePickRestaurant = (randomRestaurantsIndex) => {
        setGeneratedRestaurant(restaurants[randomRestaurantsIndex].name);
    }

    return (
        <div>    
            <FilterRestaurants items={restaurants} />
            <br />
            <br />
            <PickRestaurant onPickRestaurant={handlePickRestaurant} items={restaurants} displayPickedRestaurant={generatedRestaurant}  />
            <br/>
            <br/>
            <RestaurantList items={restaurants} />
            <br/>
            <br/>
            <RestaurantForm onAddRestaurant={handleAddRestaurant} />

        </div>
    )
}

export default RestaurantScreen;