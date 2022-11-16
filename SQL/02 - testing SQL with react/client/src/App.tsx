import axios from "axios";
import { useState } from "react";
import { Interface } from "readline";


import './App.css';

import { Person } from "./personModel";

function App() {
  const [person, setPerson] = useState<Person>();
  const handleGetPerson1 = async () => {
    try {
      const { data } = await axios.get("/testing/get-person-1");
      if (!data) throw new Error("Couldn't receive data from axios /get-person-1");
      const { result } = data;
      setPerson(result[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleGetPerson2 = () => {

  }
  console.log(person);
  return (
    <div className="App">
      <button onClick={handleGetPerson1}>get person 1</button>
      <button onClick={handleGetPerson2}>get person 2</button>
      {person !== undefined && <p>{person.name} {person.person_id}</p>}
    </div>
  );
}

export default App;
