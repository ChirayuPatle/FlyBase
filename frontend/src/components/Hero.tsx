import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            FlyBase
          </span>{" "}
          - Your complete platform for the web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          FlyBase provides the developer tools and cloud infrastructure to
          build, scale, and secure a faster, more personalized web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-105">
            Start Deploying
          </button>
          <button className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-900 transition-all transform hover:scale-105">
            Get a Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-gray-400 flex flex-col items-center"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>Develop with your favorite tools</span>
          </div>
          <div className="text-2xl font-mono">
            {">_ Launch globally, instantly @ Keep pushing !"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
