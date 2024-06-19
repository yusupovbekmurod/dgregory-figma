import express from "express";
import cors from "cors";
import "./db/mongodb.js";
import fileUpload from "express-fileupload";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    limits: { fileSize: 15 * 1024 * 1024 },
}));
//app.use(express.static("uploads"));


//app.use("/workplaces", express.static("/workplaces"));
app.listen(PORT);
console.log("server listening " + PORT);