import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "./state/AuthContext";

function App() {
  const [search, setSearch] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get(`/checkToken/${token}`)
      .then((res) => {
        if (window.location.pathname === "/login") {
          window.location.href = "/home";
        } 
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch(() => {
        window.location.href = "/login";
        localStorage.removeItem("token");
      });
    
  }, []);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <Outlet context={{ search, setSearch, watchlist, setWatchlist }} />
    </div>
  );
}

export default App;
