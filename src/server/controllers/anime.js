import axios from "axios";
import { Watchlist } from "../models/watchlist.js";

const baseUrl = "https://api.jikan.moe/v4";

export const getAllAnime = (request, response) => {
  axios
    .get(`${baseUrl}/top/anime`, {
      params: {
        page: request.query.page,
      },
    })
    .then((res) => {
      response.send(res.data.data);
    });
};

export const getDetails = (request, response) => {
  const { id } = request.params;
  axios.get(`${baseUrl}/anime/${id}`).then((res) => {
    response.send(res.data.data);
  });
};

export const addAnime = async (request, response) => {
  const { anime, userId } = request.body;
  let animeExists = await Watchlist.findOne({
    where: {
      animeId: anime.mal_id,
      userId,
    },
  });

  if (!animeExists) {
    try {
     let newAnime = await Watchlist.create({
        title: anime.title,
        animeId: anime.mal_id,
        userId,
        animeImage: anime.images.jpg.image_url,
      });
      response.send(newAnime);
      console.log(newAnime);
    } catch (error) {
      console.log(error);
      response.status(500).send("Error adding to watchlist");
    }
  } else {
    response.status(500).send("Anime already exists in watchlist");
  }
};

export const getWatchlist = async (request, response) => {
  const { userId } = request.params;
  try {
    const watchlist = await Watchlist.findAll({
      where: {
        userId,
      },
    });
    response.send(watchlist);
    console.log(watchlist);
  } catch (error) {
    console.log(error);
    response.status(400).send("Error getting watchlist");
  }
};

export const deleteAnime = async (request, response) => { 
  const { userId, animeId } = request.params;
  try {
    await Watchlist.destroy({
      where: {
        userId,
        animeId,
      },
    });
    response.send("Anime deleted");
  } catch (error) {
    console.log(error);
    response.status(500).send("Error deleting anime");
  }
}
