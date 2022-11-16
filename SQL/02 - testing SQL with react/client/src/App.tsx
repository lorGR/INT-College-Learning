import axios from "axios";
import React, { useState } from "react";
import { Interface } from "readline";


import './App.css';

interface Person {
  name: string,
  personId: number
  colorPallete: Array<string>
}

function App() {
  const [person, setPerson] = useState<Person | null>(null);
  const [personPallete, setPersonPallete] = useState();

  const handleGetPerson1 = async () => {
    try {
      const { data } = await axios.get("/testing/get-person-1");
      if (!data) throw new Error("Couldn't receive data from axios /get-person-1");
      const { info } = data;
      console.log(info);
      setPerson(info);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGetPerson2 = () => {

  }

  const handleSubmit = async (event: React.FormEvent | any ) => {
    try {
      event.preventDefault();
      const chosenColor = (event.target.elements.color.value);
      const { data } = await axios.post("/testing/set-fav-color-person", {chosenColor, personId});
      if(!data) throw new Error(" Couldn't receive data from axios /set-fav-color-person");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const personId = person?.personId;

  return (
    <div className="App">
      <button onClick={handleGetPerson1}>get person 1</button>
      <button onClick={handleGetPerson2}>get person 2</button>
      {person !== null &&
        <div>
          <form onSubmit={handleSubmit}>
          <h1>{person?.name}</h1>
          <p>id:{person?.personId}</p>
          <input type="radio" name="color" id={person?.colorPallete[0]} value={person?.colorPallete[0]} />
          <label htmlFor={person?.colorPallete[0]}>{person?.colorPallete[0]}</label>
          <input type="radio" name="color" id={person?.colorPallete[1]} value={person?.colorPallete[1]} />
          <label htmlFor={person?.colorPallete[1]}>{person?.colorPallete[1]}</label>
          <input type="radio" name="color" id={person?.colorPallete[2]} value={person?.colorPallete[2]} />
          <label htmlFor={person?.colorPallete[2]}>{person?.colorPallete[2]}</label>
          <button type="submit">Add</button>
          </form>
        </div>
      }
    </div>
  );
}

export default App;
