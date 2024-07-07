import { Router } from "express";
import head from "../controller/editorial.contr.js";

const editRouter = Router();

editRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default editRouter;