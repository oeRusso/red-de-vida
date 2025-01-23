import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import helmet from "helmet"
import config from "./config/config.js";

import userRouter from "./router/user.routes.js";
import donationRouter from "./router/donation.routes.js";
import appointmentRouter from "./router/appointment.routes.js";
import institutionRouter from "./router/institution.routes.js";
import authRoter from "./router/auth.routes.js";

// Variables
const app = express();
const PORT = config.PORT || 8080;
const MONGO_URI = config.MONGO_URI;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rutas
app.use("/api", userRouter);
app.use("/api", donationRouter);
app.use("/api", appointmentRouter);
app.use("/api", institutionRouter);
app.use("/auth", authRoter);

// MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});