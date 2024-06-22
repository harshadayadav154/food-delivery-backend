import express from "express";
import multer from "multer";

import {
  addFood,
  getAllFoodList,
  removeFoodItem,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callBack) => {
    return callBack(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getAllFoodList);
foodRouter.post("/remove", removeFoodItem);

export default foodRouter;
