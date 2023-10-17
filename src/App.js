import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  return (
    <div className="App">
      {monsters.map((monster, i) => {
        return (
          <h1 key={i}>
            {monster.name}, {i}
          </h1>
        );
      })}
      <h1></h1>
    </div>
  );
}

export default App;
