import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import Auth from "./pages/Auth";
import BooksById from "./pages/BooksById";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import ProtectedRoute from "./components/ProtectRoute";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <div className="bg-red-100 ">
      <Toaster />
      <Navbar />
      <main className="md:w-[80%] mx-auto mt-6 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="/books/:id" element={<BooksById />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
