import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start deploying?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of developers deploying their projects with FlyBase
            every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
