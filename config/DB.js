import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://harshadayadav154:SHz5rsi6u6VfMIvZ@cluster0.vgoo4ri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
