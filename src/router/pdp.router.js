import { Router } from "express";
import head from "../controller/pdp.contr.js";

const pdpRouter = Router();

pdpRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default pdpRouter;