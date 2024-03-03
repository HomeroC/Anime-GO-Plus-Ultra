import { db } from "../util/db.js";
import { DataTypes } from "sequelize";

export const Watchlist = db.define("watchlist", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  animeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  animeImage: {
    allowNull: false,
    type: DataTypes.STRING,
  }
});
