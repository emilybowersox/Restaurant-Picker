import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from "./components/HomePage/HomeScreen";
import SeleucidsScreen from "./components/Seleucids/SeleucidsScreen";
import ParkScreen from "./components/Parks/ParksScreen";
import CatApi from "./components/CatApi";
import NavBar from "./components/NavBar";
import RestaurantScreen from "./components/Restaurants/RestaurantScreen";


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/restaurants" element={<RestaurantScreen />} />
        <Route path="/seleucids" element={<SeleucidsScreen />} />
        <Route path="/parks" element={<ParkScreen />} />
        <Route path="/cats" element={<CatApi />} />
      </Routes>
    </div>
  );
}



export default App;
