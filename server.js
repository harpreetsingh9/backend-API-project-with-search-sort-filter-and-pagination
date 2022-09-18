import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movies";
import dbConnect from "./dbConnect";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
dbConnect();
app.use("/api", movieRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
