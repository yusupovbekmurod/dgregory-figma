import { Router } from "express";
import head from "../controller/bg.contr.js";

const bgRouter = Router();

bgRouter

  .get("/", head.get)
  .get("/:id", head.get)
  // .post("/admin", head.adminLogin)
  .post("/login", head.login)
  .post("/register", head.register)
  .put("/:id", head.put)
  .delete("/:id", head.delete);

export default bgRouter;
