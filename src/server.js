import express from "express";
import cors from "cors";
import "./db/mongodb.js";

import headerRouter from "./router/header.router.js";
import productRouter from "./router/productF.router.js";
import bgRouter from "./router/bg.router.js";
import editRouter from "./router/editorial.router.js";
import editorilRouter from "./router/editoril.router.js";
import productrecoRouter from "./router/productreco.router.js";
import catRouter from "./router/category.router.js";
import userRouter from "./router/users.router.js";
import bookMRouter from "./router/bookmark.router.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use("/headers", headerRouter);
app.use("/product-features", productRouter);
app.use("/bgImage", bgRouter);
app.use("/editorial", editRouter);
app.use("/editoril", editorilRouter);
app.use("/product-reco", productrecoRouter);
app.use("/category", catRouter);
app.use("/users", userRouter);
app.use("/bookmark", bookMRouter);

app.listen(PORT);
console.log("server listening " + PORT);