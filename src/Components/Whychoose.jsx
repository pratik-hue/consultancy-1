import { motion } from "framer-motion";

const services = [
  {
    title: "Hassle-Free Visa Consultation",
    description:
      "Our experts provide complete guidance for visa applications, ensuring a smooth and stress-free process with minimal chances of rejection.",
    image: "https://source.unsplash.com/800x500/?passport,travel",
  },
  {
    title: "Job & Study Visa Assistance",
    description:
      "We help students and professionals secure the right visas and opportunities abroad, making the process seamless and straightforward.",
    image: "https://source.unsplash.com/800x500/?university,students",
  },
  {
    title: "Immigration & PR Services",
    description:
      "Looking for permanent residency? We assist in all legal and document-related procedures for a hassle-free immigration experience.",
    image: "https://source.unsplash.com/800x500/?airport,immigration",
  },
];

const Whychoose = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-5xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover transform transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50 hover:opacity-30 transition duration-500"></div>
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-semibold text-gray-800 mb-4">
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

export default Whychoose;
