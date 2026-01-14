import express from "express";
import userRouter from "./routes/user.routes.js";
import connectDB from "./config/DB.js";
import cors from "cors";
import orderRouter from "./routes/order.routes.js";

const app = express();
const PORT = 8008;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();
app.get("/", (req, res) => {
  res.send(`<h1>Server is running dude</h1>`);
});

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Yoo you're response is good" });
});

app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, (req, res) => {
  console.log("Server is running on port :" + PORT);
});
