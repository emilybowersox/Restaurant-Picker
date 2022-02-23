import React, { useState, useEffect } from "react";

const CatApi = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/fact", {
      // mode: 'no-cors',
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
    return <div>Loading...</div>;
  } else {

    return (

      <div className="App">
        <header className="App-header">
          <p>Here's a cat fact:</p>
          <p>{items.fact}</p>
          <p>Fact length: {items.length}</p>
        </header>
      </div>
      
    );
  }
}

export default CatApi;