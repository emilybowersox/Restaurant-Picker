import React from 'react';

const SeleucidItem = (props) => {

    return (
        <div>
            <li>{props.name}</li>
            <p>Reign: {props.startReign}-{props.endReign} B.C.</p>
                {props.consorts.length === 0 && <p>No consorts</p> }
                {props.consorts.length === 1 && <p>Consort: {props.consorts[0]}</p> }
                {props.consorts.length > 1 && <p>Consorts: {props.consorts[0]}, {props.consorts[1]}</p>}
        </div>
    )
}

export default SeleucidItem;