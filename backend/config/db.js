import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://abhishekkumar81148:Abhishek2003@khanalaana.znynk.mongodb.net/khana laana').then(() => console.log("DB Connected"))
}