

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();

connectDB();


app.get('/', () => console.log(`working at port ${process.env.PORT}`));

app.listen(process.env.PORT)