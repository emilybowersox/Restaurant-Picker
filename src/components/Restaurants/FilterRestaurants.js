import React, { useState } from 'react';
import { Button, Form, Dropdown } from "react-bootstrap";


const FilterRestaurants = (props) => {

    const [priceFilter, setPriceFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    // const [filterCriteria, setFilterCriteria] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(props.items);

    const onPriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
        // priceFilter = event.target.value;
        // console.log("price filter:", priceFilter);
        // setFilterCriteria(priceFilter);
        // props.onFilterCriteria(priceFilter);

        // setFilteredRestaurants(props.items.filter(item => (item.price === priceFilter)));
    };

    const onGenreFilterChange = (event) => {
        setGenreFilter(event.target.value);
    }



    //next step: need to handle "if not null" for filter requirements, do "setFilterCriteria" in a seperate function.

    const onFilterButtonClick = () => {
        console.log(genreFilter);
        console.log(priceFilter);
        setFilteredRestaurants(props.items.filter(item => ((item.price === priceFilter) && (item.genre === genreFilter))));
    }



    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasic">
                <label>Price</label>
                <select onChange={onPriceFilterChange}>
                    <option></option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                </select>
                <br/>
                <label>Restaurant type</label>
                <select onChange={onGenreFilterChange}>
                    <option></option>
                    <option value="sit-down">Sit-down</option>
                    <option value="fast-casual">Fast-casual</option>
                </select>
                <br/>
                <Button type="button" onClick={onFilterButtonClick}>Filter</Button>
            </Form.Group>


            <h3>Restaurants:</h3>
            <ul>
                {filteredRestaurants.map((item, index) => (
                    <li key={index}><b>{item.name}</b>
                        <ul>
                            {/* <li>{item.foodType}</li> */}
                            <li>{item.genre}</li> 
                            <li>{item.price}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterRestaurants;