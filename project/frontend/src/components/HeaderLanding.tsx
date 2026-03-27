import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <header className="sticky top-0 z-50 border-b-[1px] border-gray-400">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <span className="text-xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            FlyBase
          </span>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
      <Link
        to="/navfeature"
        className="text-gray-300 hover:text-purple-400 transition-colors"
      >
        Features
      </Link>
      <Link
        to="#"
        className="text-gray-300 hover:text-purple-400 transition-colors"
      >
        Documentation
      </Link>
    </nav>

        <div className="flex space-x-4">
          <Link to='/login'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 cursor-pointer text-sm font-medium text-gray-300 hover:text-white"
            >
              Login
            </motion.button>
          </Link>

          <Link to='/signup'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm cursor-pointer font-medium bg-gradient-to-r from-purple-600 to-purple-800 rounded-md hover:from-purple-700 hover:to-purple-900"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderLanding;
