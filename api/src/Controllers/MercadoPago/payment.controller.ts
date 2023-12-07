import mercadopago from "mercadopago";
import { DataBase } from "../../db";
import { Request, Response } from "express";
const { Product } = DataBase.conn.models;
import dotenv from "dotenv";
dotenv.config();
const {
  MERCADOPAGO_ACCESS_TOKEN: ACCESS_TOKEN,
  BACKEND_URL,
  FRONTEND_URL,
} = process.env;

const payment = async (req: Request, res: Response) => {
  try {
    /*AHORA LO QUE SIGUE ES RECIBIR UN ARRAY DE ID'S POR BODY Y BUSCAR LOS PRODUCTOS
    EN LA BASE DE DATOS PARA PODER GENERAR LA ORDEN Y EFECTUAR EL PAGO */
    //PEDIRLE AYUDA A DANI ;)
    mercadopago.configure({
      access_token: `${ACCESS_TOKEN}`,
    });

    const result: any = await mercadopago.preferences.create({
      items: [
        {
          title: "Laptop Asus",
          unit_price: 15000,
          quantity: 1,
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `${FRONTEND_URL}/success`,
        failure: `${BACKEND_URL}/failure`,
        pending: `${BACKEND_URL}/pending`,
      },
      notification_url: "https://3480-200-122-21-76.ngrok.io/webhook",
      auto_return: "approved",
    });

    res.send(result.body);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const receiveWebhook = async (req: Request, res: Response) => {
  try {
    const payment = req.query;
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(
        Number(payment["data.id"])
      );
      console.log(data);
    }
    res.sendStatus(204);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export default payment;
