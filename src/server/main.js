import express from "express";
import ViteExpress from "vite-express";
import { Sequelize } from "sequelize";

const app = express();
app.use(express.json());



ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000..."),
);
