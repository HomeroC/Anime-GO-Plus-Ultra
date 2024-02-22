import express from "express";
import ViteExpress from "vite-express";
import { Sequelize } from "sequelize";
import { getAllAnime } from "./controllers/anime.js";

const app = express();
app.use(express.json());

app.get("/allAnime", getAllAnime)

ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000..."),
);
