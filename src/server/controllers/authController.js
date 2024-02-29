import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const { SECRET_KEY } = process.env;

const createToken = (info) => {
  return jwt.sign(info, SECRET_KEY, {
    expiresIn: "1 hour",
  });
};

export const checkToken = async (req, res) => {
  try {
    const validToken = jwt.verify(req.params.token, SECRET_KEY);
    if (validToken) {
      res.status(200).send("Valid token");
    } 
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid token");
  }
};

export const signup = async (req, res) => {
  try {
    // Check if user already exists
    let checkUser = await User.findOne({
      where: { username: req.body.username },
    });

    if (checkUser) {
      console.log(checkUser);
      res.status(400).send("User already exists");
    } else {
      console.log("Free to go");
      let newUser = await User.create(req.body);

      res.status(200).send(newUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};

export const login = async (req, res) => {
  try {
    // Check if user exists with the given username
    let validUser = await User.findOne({
      where: { username: req.body.username },
    });

    if (!validUser) {
      res.status(400).send("User does not exist");
    } else {
      if (validUser.password != req.body.password) {
        res.status(400).send("Invalid password");
      } else {
        const token = createToken(req.body);
        validUser.token = token
        //   console.log(token)
        res.status(200).send(validUser);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};
