import { Request, Response, Router } from "express";
import { ProductController } from "../controllers/products.controller";

export const ProductRouter = Router()

const Products = new ProductController()

ProductRouter.get("/", (req: Request, res: Response) => Products.getAll(req, res))

ProductRouter.get("/:id", (req: Request, res: Response) => Products.getOne(req, res))

ProductRouter.post("/", (req: Request, res: Response) => Products.create(req, res))

ProductRouter.put("/:id", (req: Request, res: Response) => Products.update(req, res))

ProductRouter.delete("/:id", (req: Request, res: Response) => Products.delete(req, res))