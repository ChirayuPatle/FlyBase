import React, { useState } from "react";
import { Mail } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If validation passes
    setError("");
    navigate("/dashboard"); // Navigate to dashboard after successful login
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6">Log in to FlyBase</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md py-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 w-full transition flex items-center justify-center space-x-2"
          >
            <Mail size={18} />
            <span>Continue with Email</span>
          </button>
        </form>

        <div className="mt-8 text-sm">
          <Link to="/signup" className="text-neutral-400 hover:underline">
            Don't have an account? <span className="text-blue-400">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
