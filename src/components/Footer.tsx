const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {["Product", "Company", "Resources", "Legal"].map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                {category}
              </h3>
              <ul className="space-y-3">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-purple-400 transition-colors"
                      >
                        {category} Link {i + 1}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              FlyBase
            </span>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FlyBase, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
