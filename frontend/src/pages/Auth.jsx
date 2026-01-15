import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Eye, EyeClosed, Loader2 } from "lucide-react";
import useAuthStore from "../store/useAuthStore";

const Auth = () => {
  const navigate = useNavigate();

  const { login, signup, loading, error } = useAuthStore();

  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "signup" && form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      email: form.email,
      password: form.password,
    };

    let success = false;

    if (mode === "login") {
      success = await login(payload);
    } else {
      success = await signup(payload);
    }

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary via-background to-muted">
     

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/30 rounded-lg shadow-elevated p-8">
          <div className="text-center mb-6">
            <h1 className="font-display text-2xl mb-1">
              {mode === "login" ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="text-sm text-muted-foreground font-accent">
              {mode === "login"
                ? "Sign in to continue reading"
                : "Join our community of book lovers"}
            </p>
          </div>

          <div className="flex mb-6 border border-border rounded-md overflow-hidden px-1 py-1">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 text-sm font-medium transition ${
                mode === "login"
                  ? "bg-white/80 text-primary shadow-sm rounded-md"
                  : "text-muted-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 text-sm font-medium transition ${
                mode === "signup"
                  ? "bg-white/80 text-primary shadow-sm rounded-md"
                  : "text-muted-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md border border-input bg-background
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-input bg-background
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-8 right-3 text-muted-foreground"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </button>
            </div>

            {mode === "signup" && (
              <div>
                <label className="block text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 rounded-md border border-input bg-background
                             focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2
                         py-2 rounded-md bg-red-900 text-white
                         hover:bg-red-900/80 transition"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Or continue without an account
            </p>
            <Link
              to="/"
              className="inline-block w-full py-2 rounded-md
                         bg-red-900/90 text-white
                         hover:bg-red-900/80 transition"
            >
              Continue as Guest
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
