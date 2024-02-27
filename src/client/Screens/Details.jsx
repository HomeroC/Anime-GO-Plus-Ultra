import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details({}) {
  const [anime, setAnime] = useState(null);
  const { id } = useParams();

  
  const getDetails = async () => { 
    try {
      await axios.get(`/animeDetails/${id}`)
        .then((res) => {
        console.log(res.data);
        setAnime(res.data);
      });
    }
    catch (error) {
      console.error("Error fetching Data:", error);
      throw error;
    }
  }


  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div className="p-4 bg-[#23252B] h-screen">
      <h1 className="text-3xl text-white pt-20"></h1>
      {anime && (
        <div className="flex flex-col items-center justify-center p-4">
          <img
            className="rounded-md max-h-80"
            src={anime.images.jpg.image_url}
            alt={anime.title}
          />
          <h2 className="text-white p-2">{anime.title}</h2>
          <p className="text-white p-2">{anime.synopsis}</p>
        </div>
      )}
      <div>
        
      </div>
       
    </div>
  );
}

export default Details;
