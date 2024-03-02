import React from "react";
import axios from "axios";

function Watchlist() {

 

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
    <h1 className="text-white flex justify-center">Your Watchlist</h1>
    <main className="flex flex-row flex-wrap gap-5 justify-center pt-14 p-2">
     
    </main>
  </div>;
}

export default Watchlist;
