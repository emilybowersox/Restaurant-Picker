import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
    const colorArray = [
        "",
        "#b8b8b8",
        "#CCCCFF",
        "#4287f5",
        "#f5f542",
        "#f54842"
      ];

      const [number, setNumber] = useState(0);
      const [color, setColor] = useState();
      const [colorMessage, setColorMessage] = useState(
        "Change the number to see the color switch!"
      );
    
      const incrementNumber = () => {
        setNumber(number + 1);
        console.log("number was incremented to ", number);
      };

      const decrementNumber = () => {
        setNumber(number - 1);
        console.log("number was decremented to ", number);
      };
    
      useEffect(() => {
        console.log("useEffect was run");
        setColor(colorArray[number]);
        console.log(color);
        setColorMessage("Change the number to see the color switch!");
        setTimeout(() => {
          setColorMessage("Color was updated!");
        }, 3000);
      }, [number]);
    
      return (
        <div className="App" style={{backgroundColor: color}}>
          <h1>{colorMessage}</h1>
          <h2>
            <button onClick={decrementNumber}>-</button> {number} <button onClick={incrementNumber}>+</button>
          </h2>
        </div>
      );
}

export default ColorChanger;