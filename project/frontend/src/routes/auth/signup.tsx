import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { fullName?: string; email?: string; password?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/; // Only alphabets and spaces

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!nameRegex.test(fullName)) {
      newErrors.fullName = "Full name should only contain letters and spaces.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    navigate("/dashboard");
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6">Create your FlyBase account</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <div className="text-red-500 text-sm text-left">{errors.fullName}</div>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <div className="text-red-500 text-sm text-left">{errors.email}</div>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
            }}
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <div className="text-red-500 text-sm text-left">{errors.password}</div>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold w-full rounded-md py-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center space-x-2"
          >
            <span>🚀 Create Account</span>
          </button>

          <Link to="/login">
            <div className="text-blue-400 text-sm hover:underline">
              ← Already have an account? Log In
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
