import React,{useContext, useEffect, useState} from "react";
import axios from "axios";
import AuthContext from "../state/AuthContext";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const { state } = useContext(AuthContext);

  const getWatchlist = async () => {
    try {
      const userId = state.userId;
      console.log(state)
      axios
        .get(`/watchlist/${2}`)
        .then((res) => {
          let anime = res.data
          console.log(anime)
          setWatchlist(anime);
        });
    } catch (error) { 
      console.error("Error getting watchlist");
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchlist();
  }, []);

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

  
  return (
    <div className=" p-4 bg-[#23252B] h-screen pt-20">
      <h1 className="text-white flex justify-center">Your Watchlist</h1>
      <main className="flex flex-row flex-wrap gap-5 justify-center pt-14 p-2">
        {watchlist?.map((anime) => {
         return (
           <div
             className="flex flex-col items-center justify-center  p-4"
             key={anime.rank}
           >
             <img
               className="rounded-md max-h-80 hover:scale-110 transition duration-300 ease-in-out"
               
               src={anime.images.jpg.image_url}
               alt={anime.title}
             />
             {titleString(anime)}
             <button className="" onClick={() => { deleteAnime(anime) }}>
               Remove
             </button>
           </div>
         );
        } )}
      </main>
    </div>
  );
}

export default Watchlist;
