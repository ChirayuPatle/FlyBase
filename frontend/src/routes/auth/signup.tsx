import React from "react";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">

      {/* Sign Up Form */}
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6">Create your FlyBase account</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Sign Up Button */}
          <Link to='/dashboard'>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold w-full rounded-md py-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center space-x-2"
          >
            <span>🚀 Create Account</span>
          </button>
          </Link>

          <Link to='/login'>
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
