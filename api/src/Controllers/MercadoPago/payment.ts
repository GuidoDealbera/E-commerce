import dotenv from "dotenv";
dotenv.config();
const { ACCESS_TOKEN } = process.env;
import mercadopago from "mercadopago";
import { Request, Response } from "express";

mercadopago.configure({
  access_token: `${ACCESS_TOKEN}`,
});

const payment = async (req: Request, res: Response) => {
  try {
    const paymentId = Number(req.params.id);
    const payment = await mercadopago.payment.get(paymentId);
    res.status(200).json(payment);
  } catch (error: any) {
    console.error(error);
    res.status(500).send("PAGO FALLIDO");
  }
};

export default payment;
