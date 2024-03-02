import axios from "axios"
import { Watchlist } from "../models/watchlist.js"
import { request } from "express"

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

export const getWatchlist = async (request, response) => { 
    const { userId } = request.params 
    try {
        const watchlist = await Watchlist.findAll({
            where: {
                userId
            }
        })
        response.send(watchlist)
        console.log(watchlist)
    } catch (error) { 
        console.log(error)
        response.status(400).send("Error getting watchlist")
    }
}