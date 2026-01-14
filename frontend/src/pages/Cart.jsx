import React from "react";
import useCartStore from "../store/useCartStore";
import { Minus, Plus, ShoppingCart, Trash2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCartStore();

  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <ShoppingCart size={36} className="mb-4 text-muted-foreground" />
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-primary underline">
          Browse books
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-4 border border-border rounded-xl bg-card shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-32 object-cover rounded-md"
                />

                <div className="flex-1 space-y-2">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    ${item.price} each
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="p-2 border rounded-md disabled:opacity-50"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="min-w-[32px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity === item.stock}
                      className="p-2 border rounded-md disabled:opacity-50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Price + Remove */}
                <div className="flex flex-col items-end justify-between">
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="md:sticky top-20 border border-border rounded-xl bg-card p-6 shadow-sm h-fit">
            <h2 className="font-display text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Items ({itemsCount})
                </span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="border-t pt-3 flex justify-between text-base font-semibold">
                <span>Total</span>
                <span className="text-primary">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full text-center py-3
                         bg-red-900 text-white rounded-md
                         hover:bg-red-900/80 transition"
            >
              Proceed to Checkout
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck size={14} />
              Secure checkout powered by our platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
