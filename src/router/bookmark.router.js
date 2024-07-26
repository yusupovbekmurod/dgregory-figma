import { Router } from "express";
import head from "../controller/bookmarl.contr.js";

const bookMRouter = Router();

bookMRouter
  .get("/", head.get)
  .get("/:id", head.get)
  .post("/", head.post)
  .post("/buy/:id", head.buy)
  .put("/:id", head.put)
  .delete("/:id", head.delete);

export default bookMRouter;
