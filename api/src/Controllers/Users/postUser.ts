import { DataBase } from "../../db";
const { User } = DataBase.conn.models;
import bcrypt from "bcrypt";
import { Request, Response } from "express";
const postUser = async (req: Request, res: Response) => {
  try {
    let passwordHash;
    const { email, password, isAdmin } = req.body;
    const check1 = await User.findOne({
      where: {
        email: email,
      },
    });
    if (check1) {
      return res.status(409).json({ message: `El mail ${email} ya existe` });
    }
    if (password && password.length > 0) {
      passwordHash = bcrypt.hashSync(password, 10);
    }
    if (!check1) {
      let newUser;
      if (isAdmin) {
        newUser = await User.create({
          email: email,
          password: passwordHash ? passwordHash : password,
          isAdmin: true,
        });
      } else {
        newUser = await User.create({
          email: email,
          password: passwordHash ? passwordHash : password,
          isAdmin: false,
        });
      }
      const response = {
        message: "Registro exitoso",
        user: newUser,
      };
      return res.status(201).json(response);
    }
    if (check1) {
      return res.status(400).send("Email ya existente");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default postUser;
