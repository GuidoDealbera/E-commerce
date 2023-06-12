const { conn } = require("../../db");
const { User } = conn.models;
const bcrypt = require("bcrypt");
import { Request, Response } from "express";
const postUser = async (req: Request,res: Response) => {
  try {
    let passwordHash;
    const { username, email, password, seller } = req.body;
    const check1 = await User.findOne({
      where: {
        email: email,
      },
    });
    const check2 = await User.findOne({
      where: {
        username: username,
      },
    });

    if (password) {
      passwordHash = bcrypt.hashSync(password, 10);
    }
    if (!check1 && !check2) {
        let newUser;
        if(seller){
             newUser = await User.create({
              username: username,
              email: email,
              password: passwordHash,
              seller: true
            });
        }else{
            newUser = await User.create({
                username: username,
                email: email,
                password: passwordHash,
                seller: false
              });
        }
      return res.status(201).json(newUser);
    }
    if (check1) {
      return res.status(400).send("Email ya existente");
    } else if (check2) {
      return res.status(401).send("Username existente");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default postUser;
