import React, { useState } from "react";
import { Home, ShoppingCart, Menu, X, BookOpen, CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";

const navLinks = [
  { icon: <Home size={18} />, title: "Home", path: "/" },
  { icon: <ShoppingCart size={18} />, title: "Cart", path: "/cart" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  const { cartItems } = useCartStore();
  const { user, token, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-xl shadow z-50">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
       
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2 hover:text-red-900"
        >
          <BookOpen size={25} /> The Book Haven
        </Link>

      
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                to={item.path}
                className="flex items-center gap-2 text-gray-700 hover:text-black relative"
              >
                {item.icon}
                <span>{item.title}</span>

                {/* Cart Badge */}
                {item.title === "Cart" && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-4 w-5 h-5 text-xs
                                   flex items-center justify-center rounded-full
                                   bg-red-600 text-white">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}

          
          {token ? (
            <div className="relative group cursor-pointer">
              <CircleUser size={28} />

              <div className="absolute right-0  w-48 bg-white rounded-md
                              shadow-lg border hidden group-hover:block">
                <div className="px-4 py-2 text-sm border-b">
                  {user?.email}
                </div>
                <Link to="/orders" className="text-center w-full flex items-center justify-center py-1 bg-green-800 text-white">Orders</Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm
                         text-center bg-red-900 cursor-pointer text-white flex items-center justify-center
                             hover:bg-muted"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/auth"
              className="px-4 py-2 rounded-md bg-black text-white"
            >
              Signup
            </Link>
          )}
        </div>

     
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-64 bg-white p-6 z-50"
            >
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-lg"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}

                {!token ? (
                  <Link
                    to="/auth"
                    className="mt-4 py-2 bg-black text-white rounded-md text-center"
                  >
                    Signup
                  </Link>
                ) : (
                  <button
                    onClick={logout}
                    className="mt-4 py-2 border rounded-md"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
