import mercadopago from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();
const {ACCESS_TOKEN} = process.env;
import {Request, Response} from "express";

mercadopago.configure({
  access_token: `${ACCESS_TOKEN}`,
});

const initPayment = async (req: Request, res: Response) => {
    try {
        const paymentData = req.body;
        const payment = await mercadopago.payment.create(paymentData);
        if(payment){
            return res.status(200).json(payment);
        }else {
            return res.status(400).send("Faltan datos?")
        }
    } catch (error) {
        res.status(500).json({error: "PAGO RECHAZADO"})
    }
};

export default initPayment;