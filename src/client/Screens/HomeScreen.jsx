import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

function HomeScreen() {
  const [watchlist, setWatchlist] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);
  const { search } = useOutletContext();
 

  const getAnime = async () => {
    try {
      await axios
        .get(`/allAnime`, {
          params: {
            page: page,
          },
        })
        .then((res) => {
          setDisplay(res.data);
        });
    } catch (error) {
      console.error("Error fetching Data:", error);
      throw error;
    }
  };

  useEffect(() => {
    getAnime();
  }, [page]);

  const titleString = (anime) => {
    let title = anime.title;
    if (title.length > 15) {
      title = title.substring(0, 15) + "...";
    }
    return <h2 className="text-white p-2">{title}</h2>;
  };

  const nextPage = () => {
    setPage(page + 1);
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const prevPage = () => {
    setPage(page - 1);
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const navigate = useNavigate();

  let list = search.length > 0 ? search : display;

  return (
    <div className="p-4 bg-[#23252B] h-full">
      <h1 className="text-white"></h1>
      <main className="flex flex-row flex-wrap gap-5 justify-center pt-14 p-2">
        {list.map((anime) => {
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
      <div className="flex justify-center mt-4 mb-4">
        <button className="sign-up" onclisck={page !== 1 && prevPage}>Previous</button>
        <button className="sign-up" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default HomeScreen;
