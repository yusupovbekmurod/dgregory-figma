import { Router } from "express";
import head from "../controller/category.contr.js";

const catRouter = Router();

catRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default catRouter;