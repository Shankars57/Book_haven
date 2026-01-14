import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const bookSamples = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    description:
      "Set in the roaring 1920s, The Great Gatsby explores themes of wealth, love, ambition, and the American Dream through the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
    stock: 10,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description:
      "A powerful and emotional novel told through the eyes of young Scout Finch, exploring racial injustice, moral growth, and compassion in the Deep South during the 1930s.",
    stock: 8,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    description:
      "A chilling dystopian novel that depicts a totalitarian society under constant surveillance, where independent thought is forbidden and truth is manipulated by the state.",
    stock: 15,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    description:
      "A timeless romantic novel that explores love, class, reputation, and misunderstandings through the spirited Elizabeth Bennet and the reserved Mr. Darcy.",
    stock: 12,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 13.49,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description:
      "A coming-of-age novel that follows teenager Holden Caulfield as he navigates feelings of alienation, identity, and the challenges of growing up in a complex world.",
    stock: 9,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    description:
      "An epic fantasy adventure that follows Bilbo Baggins on a journey filled with dragons, treasure, and bravery, laying the foundation for The Lord of the Rings universe.",
    stock: 20,
  },
];

const FeaturedBooks = () => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.section
      id="featured"
      className="py-16 bg-red-200/40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-12" variants={cardVariants}>
          <h2 className="font-display text-3xl font-bold">Featured Books</h2>
          <p className="text-muted-foreground mt-2">
            Discover some of our most loved books
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
        >
          {bookSamples.map((book) => (
            <motion.div
              key={book.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/books/${book.id}`)}
              className="bg-card border border-border rounded-xl overflow-hidden
                         shadow-warm hover:shadow-elevated transition cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={book.image}
                alt={book.title}
                className="h-64 w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-display text-lg font-semibold">
                  {book.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  by {book.author}
                </p>

                <p className="text-sm text-muted-foreground truncate">
                  {book.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-primary">
                    ${book.price}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    In stock: {book.stock}
                  </span>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link
                    to={`/books/${book.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2
                               py-2 rounded-md border border-border
                               hover:bg-muted transition"
                  >
                    <Eye size={16} />
                    View
                  </Link>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(book, 1);
                      toast.success(`${book.title} added to cart!`);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2
                               py-2 rounded-md bg-red-900 text-white
                               hover:opacity-90 transition"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedBooks;
