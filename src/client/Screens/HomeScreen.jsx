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

  const titleString = (anime) => {
    let title = anime.title
    if (title.length > 15) {
      title = title.substring(0, 15) + "...";
    }
    return <h2 className="text-white p-2">{title}</h2>
  }

  return (
    <div className="p-4 bg-[#23252B] h-full">
      <h1 className="text-white">Home Screen</h1>
      <main className="flex flex-row flex-wrap gap-5 justify-center p-2">
        {display.map((anime) => {
          return (
            <div
              className="flex flex-col items-center justify-center  p-4"
              key={anime.rank}
            >
              <img
                className="rounded-md max-h-80"
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
              {titleString(anime)}
              <button
                className=""
                onClick={() => setWatchlist([...watchlist, anime])}
              >
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
