import { motion } from "framer-motion";
import visa2 from "../assets/visa2.jpg";
import visa3 from "../assets/visa3.jpg";
import visa4 from "../assets/visa4.jpg";

const services = [
  {
    title: "Hassle-Free Visa Consultation",
    description:
      "Our experts provide complete guidance for visa applications, ensuring a smooth and stress-free process with minimal chances of rejection.",
    image: visa2,
  },
  {
    title: "Job & Study Visa Assistance",
    description:
      "We help students and professionals secure the right visas and opportunities abroad, making the process seamless and straightforward.",
    image: visa3,
  },
  {
    title: "Immigration & PR Services",
    description:
      "Looking for permanent residency? We assist in all legal and document-related procedures for a hassle-free immigration experience.",
    image: visa4,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-center text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
