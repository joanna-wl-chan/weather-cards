import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Card from "./Card";

const api = {
  key: "12a629be1cabbbf31a09826b615fd0b3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  // locations is an array of objects containing weather info about each location
  const [locations, setLocations] = useState([]);


  function handleSearch(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setLocations(prevState => {
        return [...prevState, result]
      })
    })
  }

  return (
    <>
      <Header />
      <InputArea label="enter your location search..." handleSearch={handleSearch} />
      <div className="cards-container">
        {locations.map(location => 
          <Card 
            key={location.id} 
            location={location.name} 
            temp={location.main.temp} 
            temp_min={location.main.temp_min}
            temp_max={location.main.temp_max}
            description={location.weather[0].main}
          />)}
      </div>
    </>
  )
}

export default App;
