import express from "express";
import ViteExpress from "vite-express";
import { getAllAnime, getDetails, addAnime} from "./controllers/anime.js";
import {db} from "./util/db.js"
import { User } from "./models/user.js";
import { Watchlist } from "./models/watchlist.js";
import { login, signup, checkToken } from "./controllers/authController.js";

const app = express();
app.use(express.json());

app.get("/allAnime", getAllAnime)
app.get("/animeDetails/:id", getDetails)
app.post("/addAnime", addAnime)

app.post("/login", login)
app.post("/signup", signup)
app.get("/checkToken/:token", checkToken)

User.hasMany(Watchlist);
Watchlist.belongsTo(User)

db.sync()

ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000..."),
);
