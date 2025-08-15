import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // allow frontend on both ports
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Database Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Route
app.get("/", (req, res) => {
    res.send("QuickBite API Working 🚀");
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server Started on port: ${port}`);
});
