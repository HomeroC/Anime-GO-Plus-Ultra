import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState([]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <Outlet context={{ search, setSearch }} />
    </div>
  );
}

export default App;
