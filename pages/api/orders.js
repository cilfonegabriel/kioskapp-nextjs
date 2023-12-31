import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient();

    //Get Order
    const orders = await prisma.order.findMany({
        where: {
            state: false
        }
    })
    res.status(200).json(orders);

    //Create Order
    if(req.method === "POST") {

        const order = await prisma.order.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                pedido: req.body.order,
                date: req.body.date,
            },
        });
        res.status(200).json(order)
    }
}