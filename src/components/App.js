import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  let url = "http://localhost:3001/pets";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((pets) => setPets(pets))
  }, [])

  function onFindPetsClick(){
    if (filters !== "all") {
      url = `http://localhost:3001/pets?type=${filters}`
    } else {url = "http://localhost:3001/pets"}{
      fetch(url)
      .then((resp) => resp.json())
      .then((pets) => setPets(pets))
    }
  }

  function onChangeType(e){
    setFilters(e.target.value)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
            onChangeType={onChangeType}
            onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
            pets={pets}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
