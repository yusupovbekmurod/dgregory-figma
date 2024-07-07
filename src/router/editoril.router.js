import { Router } from "express";
import head from "../controller/editoril.contr.js";

const editorilRouter = Router();

editorilRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default editorilRouter;