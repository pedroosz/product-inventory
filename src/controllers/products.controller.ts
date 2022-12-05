import { Request, Response } from "express";
import { DatabaseClient } from "../database";

export class ProductController {
    async getAll(req: Request, res: Response) {

        const AllProducts = await DatabaseClient.product.findMany()

        return res.status(200).send(AllProducts)
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params;

        const ProductData = await DatabaseClient.product.findFirst({
            where: {
                id: Number(id)
            }
        })

        if(!ProductData) return res.sendStatus(404)

        return res.status(200).send(ProductData)
    }

    async create(req: Request, res: Response) {
        const { name, price, qty }: ProductDTO = req.body;

        if(!name || !price || !qty) {
            return res.status(400).send({
                message: "One or more fields are missing."
            })
        }

        await DatabaseClient.product.create({
            data: { 
                name, 
                qty, 
                price 
            }
        }).then((ProductData) => {
            return res.status(201).send(ProductData)
        })
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, qty }: ProductDTO = req.body;

        const ProductData = await DatabaseClient.product.findFirst({
            where: {
                id: Number(id)
            }
        })

        if(!ProductData) return res.sendStatus(404)

        await DatabaseClient.product.update({
            where: {
                id: Number(id)
            },
            /* 
                If they are not present, they are not going to change
            */
            data: {
                name: name || undefined,
                price: price || undefined,
                qty: qty || undefined
            }
        }).then((ProductData) => {
            return res.status(200).send(ProductData)
        })
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const Product = await DatabaseClient.product.findFirst({
            where: {
                id: Number(id)
            }
        })

        if(!Product) {
            return res.sendStatus(404)
        }

        await DatabaseClient.product.delete({
            where: {
                id: Number(id)
            }
        }).then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.sendStatus(501)
        })
    }
}