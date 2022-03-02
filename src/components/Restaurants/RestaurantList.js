import React from 'react';

const RestaurantList = (props) => {

    return (
        <div>
        <h3>All Restaurants:</h3> 
            <ul>
                {props.items.map((item, index) => (
                             <li key={index}><b>{item.name}</b>
                             <ul>
                                 <li>{item.foodType}</li>
                                 <li>{item.genre}</li>
                             </ul>
                         </li>
                ))}
            </ul>
        </div>
    )

}

export default RestaurantList;