import React, { useState, useEffect } from "react";
import SeleucidItem from "./SeleucidItem";
import SeleucidsFilter from "./SeleucidsFilter";

const SeleucidsApi = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        fetch("https://seriouslyfundata.azurewebsites.net/api/seleucids")
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                for (const [key, value] of Object.entries(result)) {
                    // console.log(key, value);
                    setObjects(...objects, value)
                  }
            },
            (error) => {
                // setIsLoaded(true);
                setError(error);
                console.log("An error ooccured: ", error)
            }
        )
    },[])
    // a blank array is necessary to have it run only once
    console.log(objects);


    const [filteredCentury, setFilteredCentury] = useState('');
    const filterChangeHandler = (century) => {
        setFilteredCentury(century);
    }
    console.log("Filtered century value is ", filteredCentury);


    //if i wanted to not have "be back in a jiffy" flash before the error message, 
    //would i have to set a Timeout to give the error time to run?
    if (error) {
        return <div>
                    An error occured: {error.message}
                </div>;
    } else if ((!isLoaded) && (error != null)) {
        return <div>
                    Be back in a jiffy...
                </div>;
    } else {
    return (
        <div>
            <p>The Seleucids</p>
            <SeleucidsFilter 
                // selected={filteredCentury}
                onChangeFilter={filterChangeHandler}
            />
            <ol>
            {objects.filter(myItem => (myItem.startReign < filteredCentury) && (myItem.startReign > (filteredCentury - 100))).map((item, index) => (
                <SeleucidItem 
                    key={index}
                    name={item.name}
                    startReign={item.startReign}
                    endReign={item.endReign}
                    consorts={item.consorts}
                />
            ))}
            </ol>
        </div>
    );
}


}

export default SeleucidsApi;