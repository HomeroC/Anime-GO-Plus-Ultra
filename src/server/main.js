import express from "express";
import ViteExpress from "vite-express";
import { getAllAnime, getDetails, addAnime, getWatchlist, deleteAnime} from "./controllers/anime.js";
import {db} from "./util/db.js"
import { User } from "./models/user.js";
import { Watchlist } from "./models/watchlist.js";
import { login, signup, checkToken } from "./controllers/authController.js";

const app = express();
app.use(express.json());

app.get("/allAnime", getAllAnime)
app.get("/animeDetails/:id", getDetails)
app.post("/addAnime", addAnime)
app.delete("/deleteAnime/:userId/:animeId", deleteAnime) 

app.post("/login", login)
app.post("/signup", signup)
app.get("/checkToken/:token", checkToken)
app.get('/watchlist/:userId', getWatchlist)

User.hasMany(Watchlist);
Watchlist.belongsTo(User)

db.sync()
// db.drop()


ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000..."),
);
