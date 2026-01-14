import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (book, quantity = 1) => {
        const cart = get().cartItems;
        const existing = cart.find((item) => item.id === book.id);

        if (existing) {
          const updatedCart = cart.map((item) =>
            item.id === book.id
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + quantity, item.stock),
                }
              : item
          );
          set({ cartItems: updatedCart });
        } else {
          set({
            cartItems: [
              ...cart,
              {
                id: book.id,
                title: book.title,
                price: book.price,
                quantity,
                stock: book.stock,
                image: book.image,
              },
            ],
          });
        }
      },

   
      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id),
        });
      },

   
      updateQuantity: (id, quantity) => {
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, Math.min(quantity, item.stock)),
                }
              : item
          ),
        });
      },

   
      clearCart: () => set({ cartItems: [] }),

     
      getTotalPrice: () =>
        get().cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "book-cart-storage", 
      partialize: (state) => ({ cartItems: state.cartItems }), 
    }
  )
);

export default useCartStore;
