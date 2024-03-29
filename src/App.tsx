import React, { useState } from "react";
import "./App.css";
import Part1 from "./part1/Part1";
import Part2 from './part2/Part2';
import Part3AddSingleFavourite from "./part3AddSingleFavourite/part3AddSingleFavourite";
import Part3AddFavourites from "./part3AddFavourites/part3AddFavourites";
import Part3ReusableUseLocalStorage from "./part3ReusableUseLocalStorage/part3ReusableUseLocalStorage";
import Part3EventListener from "./part3EventListener/Part3EventListener";
import Part4 from './part4/Part4';

function App() {
  return (
    <>
      {/* Solutions for X */}
      {/* <X /> */}
      
      {/* Solutions for useState tasks */}
      <Part1 />
      {/* Solutions for useEffect tasks (look at the commits to go to each task) */}
      {/* <Part2 />*/}
      {/* Solutions for custom useFavouriteContact hook */}
      {/* <Part3AddSingleFavourite /> */}
      {/* Solutions for custom useFavouriteContacts hook */}
      {/* <Part3AddFavourites /> */}
      {/* Solutions for custom useFavouriteContacts hook */}
      {/* <Part3ReusableUseLocalStorage /> */}
      {/* Solutions for event listener */}
      {/* <Part3EventListener /> */}
      {/* Solutions for useSuggestions */}
      {/* <Part4 />*/}
    </>
  );
}

export default App;
