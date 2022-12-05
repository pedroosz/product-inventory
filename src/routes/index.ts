import { Router } from "express";
import { ProductRouter } from "./products.routes";

export const router = Router()

router.use("/products", ProductRouter)

router.get("/", (req, res) => {
    res.send({
        message: "Hello, World!"
    })
})