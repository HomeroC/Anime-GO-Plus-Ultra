import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeScreen() {
  const [watchlist, setWatchlist] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);

  const getAnime = () => {
    axios.get(`/allAnime`).then((res) => {
      console.log(res.data);
      displayAnime(res.data);
    });
  };

  const displayAnime = (anime) => {
    setDisplay(anime);
  };

  useEffect(() => {
    getAnime();
  }, [page]);

  return (
    <div className="p-4 bg-[#250458] h-full">
      <h1 className="text-white">Home Screen</h1>
      <main className="flex flex-row flex-wrap gap-8 justify-center p-4">
        {display.map((anime) => {
          return (
            <div className="box-border" key={anime.rank}>
              <h2 className="text-white">{anime.title}</h2>
              <img
                className="animeCard"
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
              <button onClick={() => setWatchlist([...watchlist, anime])}>
                Add to Watchlist
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default HomeScreen;
