import React from "react";
import { useOutletContext } from "react-router-dom";

function Watchlist() {

  const { watchlist, setWatchlist } = useOutletContext();

  const deleteAnime = (id) => {
    const newWatchlist = watchlist.filter((anime) => {
      return anime.mal_id !== id;
    });
    setWatchlist(newWatchlist);
  };

  const titleString = (anime) => {
    let title = anime.title;
    if (title.length > 15) {
      title = title.substring(0, 15) + "...";
    }
    return <h2 className="text-white p-2">{title}</h2>;
  };

  return <div className=" p-4 bg-[#23252B] h-screen pt-20">
    <h1 className="text-white">Watchlist</h1>
    <main className="flex flex-row flex-wrap gap-5 justify-center pt-14 p-2">
      {watchlist.map((anime) => {
        return (
          <div key={anime.mal_id} className="rounded-lg w-60 h-80">
            <img
              className="rounded-md max-h-80 hover:scale-110 transition duration-300 ease-in-out"
              src={anime.images.jpg.image_url}
              alt={anime.title}
            />
            {titleString(anime)}
            <div className="p-2">
             
              <button
                onClick={() => deleteAnime(anime.mal_id)}
                className=" bg-red-600 text-white p-1 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </main>
  </div>;
}

export default Watchlist;
