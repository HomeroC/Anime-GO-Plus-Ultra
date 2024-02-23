import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function Details({}) {
    
    
    let { id } = useParams()
    const baseUrl = "https://api.jikan.moe/v4";
    useEffect(() => {
        axios.get(`${baseUrl}/anime/${id}`)
        .then((res) => {
            console.log(res.data)
        })
    })

  return (
    <div className="p-4 bg-[#23252B] h-screen">
      {/* <h1>{anime.title}</h1> */}
    </div>
  );
}

export default Details