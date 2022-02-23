import React from 'react';
import ColorChanger from './ColorChanger';

const HomeScreen = () => {
    // const colorArray = [
    //     "ffffff",
    //     "F08080",
    //     "#CCCCFF",
    //     800080,
    //     589574,
    //     426386,
    //     331810
    //   ];
    

    return (

        <div className="App">
            <header className="App-header">
                 <h1>Home Screen</h1>
                <ColorChanger />
            </header>
        </div>

    )
}

export default HomeScreen;