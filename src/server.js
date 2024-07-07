import express from "express";
import cors from "cors";
import "./db/mongodb.js";
import headerRouter from "./router/header.router.js";
import productRouter from "./router/header.router.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/headers", headerRouter);
app.use("/product-features", productRouter);

app.listen(PORT);
console.log("server listening " + PORT);