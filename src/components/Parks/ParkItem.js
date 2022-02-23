import React from 'react';

const ParkItem = (props) => {
    function createDescription() {
        return {__html: props.description};
    }

    function createDirections() {
        return {__html: props.directions};
    }

    const sanctuaryNameData = props.sanctuaryName;

    return (
        <div>
            <li>{props.name}</li>
            <p>ID: {props.parkId}</p>
            {sanctuaryNameData.length > 0 &&
                 <p>Sanctuary: {sanctuaryNameData}</p>
            }
            <p>Borough: {props.borough}</p>
            <p>Habitat Type: {props.habitatType}</p>
            <p>Acres: {props.acres}</p>
            <p dangerouslySetInnerHTML={createDescription()} />
            <p>Directions:</p>
            <p dangerouslySetInnerHTML={createDirections()} />
           
            {/* why can't i display the key (index) here? keys not passed to child components?*/}
            {/* <li>{props.key}</li> */}
        </div>
    );
}

export default ParkItem;