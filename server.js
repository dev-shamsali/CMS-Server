import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/post.routes.js";


dotenv.config();

// INIT APP
const app = express();

// CONNECT DB
connectDB();

// MIDDLEWARES (global)
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("API Running...");
});

// ROUTES
app.use("/api/posts", postRoutes);


// SERVER LISTEN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});