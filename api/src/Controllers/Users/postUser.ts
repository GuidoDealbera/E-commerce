const { conn } = require("../../db");
const { User } = conn.models;
const bcrypt = require("bcrypt");
import { Request, Response } from "express";
const postUser = async (req: Request,res: Response, next: any) => {
  try {
    let passwordHash;
    const { email, password, seller } = req.body;
    const check1 = await User.findOne({
      where: {
        email: email,
      },
    });
    if(check1) {
      return next();
    }
    if (password && password.length > 0) {
      passwordHash = bcrypt.hashSync(password, 10);
    }
    if (!check1) {
        let newUser;
        if(seller){
             newUser = await User.create({
              email: email,
              password: passwordHash ? passwordHash : password,
              seller: true
            });
        }else{
            newUser = await User.create({
                email: email,
                password: passwordHash ? passwordHash : password,
                seller: false
              });
        }
      return res.status(201).json(newUser);
    }
    if (check1) {
      return res.status(400).send("Email ya existente");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default postUser;
