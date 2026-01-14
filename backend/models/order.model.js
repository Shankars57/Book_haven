import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        bookId: Number,
        title: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    shippingDetails: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Placed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
