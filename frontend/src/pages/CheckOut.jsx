import React, { useState } from "react";
import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api/axios";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCartStore();
  const { token } = useAuthStore();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      items: cartItems.map((item) => ({
        bookId: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      shippingDetails: form,
      totalAmount: getTotalPrice(),
    };

    try {
      const { data } = await axios.post(
        "https://book-haven-9rxd.onrender.com/api/order",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success("Order successfully Placed");
        clearCart();
        navigate("/orders");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Details</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <textarea
                  required
                  name="address"
                  placeholder="Shipping Address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />

                <button className="w-full py-3 bg-red-900 text-white rounded-md">
                  Place Order • ${getTotalPrice().toFixed(2)}
                </button>
              </form>
            </div>
          </div>

          <div className="border rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({totalQty})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
