import { Router } from "express";
import head from "../controller/header.contr.js";

const headerRouter = Router();

headerRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default headerRouter;