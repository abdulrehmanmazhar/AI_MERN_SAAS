import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

// Environment Variable configuration
dotenv.config();


const app = express();


// Middlewares
app.use(cors());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static('public'));
app.use(cookieParser());


// Database Connection 
connectDB();

// Routes
app.get('/', () => console.log(`working at port ${process.env.PORT}`));


app.listen(process.env.PORT)