import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import FilterBox from './components/filterbox';

function App() {
  return (
    <>
      <Carousel />
      <div>
        <FilterBox />
      </div>
      
    </>
  );
}

export default App;
