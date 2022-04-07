import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ColorScreen from "./components/ColorChanger/ColorScreen";
import SeleucidsScreen from "./components/Seleucids/SeleucidsScreen";
import ParkScreen from "./components/Parks/ParksScreen";
import CatApi from "./components/CatApi";
import NavBar from "./components/NavBar";
import RestaurantScreen from "./components/Restaurants/RestaurantScreen";
import HomeScreen from "./components/HomeScreen";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/colorchanger" element={<ColorScreen/>} />
        <Route path="/restaurants" element={<RestaurantScreen/>} />
        {/* <Route path="/pick" element={<RestaurantPickerScreen items={restaurants}/>} /> */}
        <Route path="/seleucids" element={<SeleucidsScreen />} />
        <Route path="/parks" element={<ParkScreen />} />
        <Route path="/cats" element={<CatApi />} />
      </Routes>
    </div>
  );
}



export default App;
