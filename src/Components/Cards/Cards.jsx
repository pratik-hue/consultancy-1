import { motion } from "framer-motion";
import student1 from "../../assets/student1.jpg";
import work from "../../assets/work.jpg";
import couple from "../../assets/couple.jpg";

import family from "../../assets/family.jpg";

const services = [
  {
    id: 1,
    title: "Student Visa",
    description: "Get expert guidance for your student visa application and study abroad.",
    image: student1,
  },
  {
    id: 2,
    title: "Work Visa",
    description: "We help professionals secure work visas and job placements globally.",
    image: work,
  },
  {
    id: 3,
    title: "Tourist Visa",
    description: "Plan your dream vacation with our hassle-free tourist visa services.",
    image: couple,
  },
  {
    id: 4,
    title: "Permanent Residency",
    description: "Migrate with ease! We assist with PR applications for various countries.",
    image: family,
  },
];

const Cards = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Visa Services
        </motion.h2>

        {/* Cards Grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
