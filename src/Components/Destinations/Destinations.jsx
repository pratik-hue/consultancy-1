import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import canadaImg from "../../assets/canada.jpg";
import australiaImg from "../../assets/australia.jpg";
import ukImg from "../../assets/uk.jpg";
import usImg from "../../assets/us.jpg";

const destinations = [
  { name: "Canada", image: canadaImg, description: "Explore visa options for students, professionals, and families." },
  { name: "Australia", image: australiaImg, description: "Opportunities for skilled workers, students, and tourists." },
  { name: "United Kingdom", image: ukImg, description: "Learn about working, studying, and living in the UK." },
  { name: "United States", image: usImg, description: "Explore visa options for various categories and programs." },
];

const UniqueDestinationCards = () => {
  return (
    <section className="py-16 bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Animation when in View */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Choose Your Destination
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } }, // Slower stagger
  }}
>
  {destinations.map((item, index) => (
    <motion.div
      key={index}
      className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.2, ease: "easeOut" }} // Slower animation
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-100 object-cover transition-transform duration-500"
      />

      {/* Darken effect and content visibility on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-100 group-hover:opacity-100 transition duration-300">
        <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
        <p className="text-lg mt-2 text-white text-center">{item.description}</p>

        {/* Learn More Button */}
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full flex items-center opacity-100 group-hover:opacity-100 transition duration-300">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default UniqueDestinationCards;
