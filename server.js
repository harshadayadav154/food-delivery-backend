import express from "express";
import cors from "cors";

// import configs
import { connectDB } from "./config/DB.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
// port
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Db connection
connectDB();

// Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
