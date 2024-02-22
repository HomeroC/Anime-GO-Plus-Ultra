import axios from "axios"

const baseUrl = "https://api.jikan.moe/v4"

export const getAllAnime = (request, response) => {
    axios.get(`${baseUrl}/top/anime`)
        .then((res) => { 
            response.send(res.data.data)
        })
} 