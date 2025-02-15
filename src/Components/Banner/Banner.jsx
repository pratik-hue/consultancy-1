import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../../assets/banner111.png";

const Banner = () => {
  return (
    <div className="relative bg-white h-[500px] md:h-[500px] flex items-center justify-center text-center text-gray-800 overflow-hidden shadow-md">
              <img
                src={banner}
                alt=""
              />
      {/* Content */}
      {/* <motion.div 
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 drop-shadow-lg">
          Hassle-Free Visa Consultancy Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Simplifying visa applications, immigration processes, and travel solutions with expert guidance.
        </p>
        <Link to="/services">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform"
          >
            Explore Services
          </motion.button>
        </Link>
      </motion.div> */}
    </div>
  );
};

export default Banner;
