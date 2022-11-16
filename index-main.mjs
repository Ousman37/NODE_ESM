import express from "express";
import { welcome } from "./index-main.mjs";

const app = express();

app.get("/", (req, res) => res.send("welcome!"));

const port = 5008;

app.listen(port, () => console.log(`Server started on port ${port}`));
