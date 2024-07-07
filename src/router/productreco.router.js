import { Router } from "express";
import head from "../controller/productreco.contr.js";

const productrecoRouter = Router();

productrecoRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default productrecoRouter;