import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api/axios";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      signup: async (data) => {
        try {
          set({ loading: true, error: null });
          const res = await api.post("/api/user/signup", data);
          localStorage.setItem("token", res.data.token);
          set({
            user: res.data.user,
            token: res.data.token,
            loading: false,
          });
          return true;
        } catch (err) {
          set({
            error: err.response?.data?.message || "Signup failed",
            loading: false,
          });
          return false;
        }
      },

      login: async (data) => {
        try {
          set({ loading: true, error: null });
          const res = await api.post("/api/user/login", data);

          localStorage.setItem("token", res.data.token);

          set({
            user: res.data.user,
            token: res.data.token,
            loading: false,
          });

          return true;
        } catch (err) {
          set({
            error: err.response?.data?.message || "Login failed",
            loading: false,
          });
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
