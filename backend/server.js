import "dotenv/config";
import express, { json } from "express";
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(json());
app.use(cors());

// db connection
connectDb(process.env.MONGO_URL);

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${PORT}`);
    
})

// mongodb+srv://abhishekkumar81148:Abhishek2003@khanalaana.znynk.mongod