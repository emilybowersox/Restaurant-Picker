import React, { useState, useEffect } from "react";
import ParkItem from "./ParkItem";

const ParkApi = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

useEffect(() => {
    fetch("https://seriouslyfundata.azurewebsites.net/api/parks", {
})
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log("success: ", result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error ran: ", error)
        }
        )
      .then(console.log("Use effect ran"))
  }, [])


  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>One moment please...</div>;
  } else {
  
  return (
    <div>
        <h2>Parks</h2>
        <ol>
        {items.map((item, index) => (
            <ParkItem 
              key={index}
              parkId={item.ParkID}
              name={item.Parkname}
              sanctuaryName={item.SanctuaryName}
              borough={item.Borough}
              acres={item.Acres}
              directions={item.Directions}
              description={item.Description}
              habitatType={item.HabitatType}
            />
        ))}
      </ol>
    </div>
  );
}
}

export default ParkApi;