import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
  const filtredMonsters = monsters.filter((monster) =>
    String(monster.name).toLowerCase().includes(String(search).toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox
        value={search}
        handleChange={(e) => setSearch(e.target.value)}
      />
      <CardList items={filtredMonsters} />
    </div>
  );
}

export default App;
