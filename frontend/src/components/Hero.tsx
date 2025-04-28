import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            FlyBase
          </span>{" "}
          — Your complete platform for the web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl"
        >
          FlyBase provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/login">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900">
              Start Deploying
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center space-y-8 mt-2"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
            </div>
            <p className="max-w-2xl text-center text-gray-400">
              Develop with the tools you love without any restrictions. Our platform is designed specifically for projects built using HTML, CSS, and JavaScript. Simply upload your files, and we’ll take care of the rest — no complex configurations or extra setup needed. Focus on creating, and let us handle the deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
