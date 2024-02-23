import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

function HomeScreen() {
  const [watchlist, setWatchlist] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);
  

  const getAnime = () => {
    axios.get(`/allAnime`).then((res) => {
      setDisplay(res.data);
    });
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

  const navigate = useNavigate()

  

  return (
    <div className="p-4 bg-[#23252B] h-full">
      <h1 className="text-white">Home Screen</h1>
      <main className="flex flex-row flex-wrap gap-5 justify-center p-2">
        {display.map((anime) => {
          const handleNavigate = () => {
            navigate(`/details/${anime.mal_id}`);
          };
          return (
            <div
              className="flex flex-col items-center justify-center  p-4"
              key={anime.rank}
            >
              <img
                className="rounded-md max-h-80 hover:scale-110 transition duration-300 ease-in-out"
                onClick={handleNavigate}
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
