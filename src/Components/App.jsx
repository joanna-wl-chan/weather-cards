import React, { useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Card from "./Card";

function App() {

  const [locations, setLocations] = useState([]);

  function handleAdd(newSearch) {
    setLocations(prevState => {
      return [...prevState, newSearch]
    })
  }

  return (
    <>
      <Header />
      <InputArea label="enter your location search..." handleAdd={handleAdd}/>
      <div className="cards-container">
        {locations.map(location => <Card location={location} />)}
      </div>
    </>
  )
}

export default App;
