import { motion } from "framer-motion";
import {Shield, GitBranch, Server } from "lucide-react";

const NavFeature = () => {

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Enterprise Security",
      description: "Automatic SSL, DDoS protection, and SOC2 compliance built into every deployment.",
      stats: "99.99% uptime SLA"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-400" />,
      title: "Git Integration",
      description: "Connect your GitHub, GitLab or Bitbucket for automatic deployments on every push.",
      stats: "Supports all major Git providers"
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: "Serverless Functions",
      description: "Run backend code without managing servers. Scale to zero when not in use.",
      stats: "Cold starts under 50ms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-6xl font-bold "
        >
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            FlyBase
          </span>{" "}
          Platform Features
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Everything you need to build, deploy, and scale modern web applications
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 mb-6 rounded-lg bg-purple-900/50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{feature.description}</p>
                <p className="text-sm text-purple-400 font-mono">{feature.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavFeature;
