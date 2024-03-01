import axios from "axios"

const baseUrl = "https://api.jikan.moe/v4"

export const getAllAnime = (request, response) => {
    axios.get(`${baseUrl}/top/anime`, {
        params: {
            page: request.query.page
        } 
    
    })
        .then((res) => { 
            response.send(res.data.data)
        })
} 

export const getDetails = (request, response) => {
    const { id } = request.params
    axios.get(`${baseUrl}/anime/${id}`)
        .then((res) => {
            response.send(res.data.data)
        })
}