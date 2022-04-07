import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";

const FilterRestaurants = (props) => {

    let priceFilter = "";
    // const [priceFilter, setPriceFilter] = useState("");
    // const [filterCriteria, setFilterCriteria] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const onPriceFilterChange = (event) => {
        // setPriceFilter(event.target.value);
        priceFilter = event.target.value;
        // console.log("price filter:", priceFilter);
        // setFilterCriteria(priceFilter);
        // props.onFilterCriteria(priceFilter);
        setFilteredRestaurants(props.items.filter(item => (item.price === priceFilter)));
    };

    return (
        <div>
            <label>How much do you want to spend?</label>
            <select onChange={onPriceFilterChange}>
                <option></option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
            </select>

            <h3>Filtered Restaurants:</h3>
            <ul>
                {filteredRestaurants.map((item, index) => (
                    <li key={index}><b>{item.name}</b>
                        <ul>
                            {/* <li>{item.foodType}</li>
                     <li>{item.genre}</li> */}
                            <li>{item.price}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterRestaurants;