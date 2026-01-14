import express from "express";
import { placeOrder, getMyOrders } from "../controller/order.controller.js";
import verifyAuth from "../middleware/auth.middleware.js";

const orderRouter = express.Router();

orderRouter.post("/", verifyAuth, placeOrder);
orderRouter.get("/my-orders", verifyAuth, getMyOrders);

export default orderRouter;
