import axios from "axios"
import { Watchlist } from "../models/watchlist.js"

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

export const addAnime = async (request, response) => { 
    
    const { anime, userId } = request.body
    
    try {
        const newAnime = await Watchlist.create({
            title: anime.title,
            animeId: anime.mal_id,
            userId
        } )
        response.send(newAnime)
    } catch (error) {
        console.log(error)
        response.status(400).send("Error adding to watchlist")
    }
}