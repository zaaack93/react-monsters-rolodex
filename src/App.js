import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  return (
    <div className="App">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search robots"
        className="search-box"
        type="search"
      />
      <CardList items={monsters} />

      {monsters
        .filter((monster) =>
          String(monster.name)
            .toLowerCase()
            .includes(String(search).toLowerCase())
        )
        .map((monster, i) => {
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
