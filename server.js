// app.js

import express from "express";
import postsRoutes from "./routes/postsRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", postsRoutes);

app.listen(8080, () => console.log("listening on port 8080"));
