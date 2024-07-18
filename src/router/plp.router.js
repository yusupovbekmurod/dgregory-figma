import { Router } from "express";
import head from "../controller/plp.contr.js";

const plpRouter = Router();

plpRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default plpRouter;