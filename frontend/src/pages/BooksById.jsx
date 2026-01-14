import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import useCartStore from "../store/useCartStore";
import { bookSamples } from "../assests/assests";
const BooksById = () => {
  const { id } = useParams();
  const book = bookSamples.find((b) => b.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2>Book not found</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/" className="flex items-center gap-2 mb-6 text-sm">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-[420px] object-cover rounded-lg"
          />

          <div className="space-y-5">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-muted-foreground">{book.description}</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((q) => Math.min(book.stock, q + 1))}
                disabled={quantity === book.stock}
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(book, quantity)}
              className=" flex items-center justify-center text-sm gap-1  px-2 cursor-pointer py-3 bg-red-900 text-white rounded-md"
            >
              <ShoppingCart size={18} />
              Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksById;
