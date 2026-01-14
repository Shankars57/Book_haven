import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const Orders = () => {
  const { token } = useAuthStore();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8008/api/order/my-orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data.orders));
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {orders.map((order) => (
          <div key={order._id} className="border rounded-xl p-6 mb-6">
            <p className="text-sm mb-3">
              {new Date(order.createdAt).toDateString()}
            </p>

            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm">
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            ))}

            <div className="mt-4 font-semibold">
              Total: ${order.totalAmount}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
