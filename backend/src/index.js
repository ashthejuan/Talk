import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import {app,server} from "./lib/socket.js"
import cors from "cors"
import path from "path"
dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve()
app.use(express.json())
app.use(cookieParser());
app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)


server.listen(PORT, () =>{
    console.log("Server is running on PORT: " + PORT);
    connectDB();
})