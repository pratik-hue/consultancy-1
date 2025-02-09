import { motion } from "framer-motion";
import { Briefcase, Globe, Plane, FileText, UserCheck, ShieldCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Work Visa Assistance",
    description: "We help professionals secure work visas in multiple countries, ensuring a smooth process.",
    icon: <Briefcase className="text-blue-600 w-10 h-10" />,
  },
  {
    id: 2,
    title: "Study Visa Processing",
    description: "Guiding students through the visa process to study in top universities worldwide.",
    icon: <Globe className="text-green-600 w-10 h-10" />,
  },
  {
    id: 3,
    title: "Tourist & Travel Visas",
    description: "Helping travelers obtain visas quickly and without hassle for their dream destinations.",
    icon: <Plane className="text-red-600 w-10 h-10" />,
  },
  {
    id: 4,
    title: "Permanent Residency & PR",
    description: "Expert guidance on permanent residency applications to make immigration easy.",
    icon: <FileText className="text-yellow-600 w-10 h-10" />,
  },
  {
    id: 5,
    title: "Visa Documentation Support",
    description: "Assisting with paperwork, legal documentation, and embassy interviews for a successful application.",
    icon: <UserCheck className="text-purple-600 w-10 h-10" />,
  },
  {
    id: 6,
    title: "Legal Immigration Consultation",
    description: "Get expert legal advice for a seamless immigration process and visa approval.",
    icon: <ShieldCheck className="text-indigo-600 w-10 h-10" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          We provide expert visa consultation services to help you travel, work, or study abroad with ease.
        </motion.p>

        {/* Cards Grid with Smooth Scroll Animation */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger only when 20% is in view
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, ease: "easeInOut" },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center transition"
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 10, mass: 1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
                transition: { type: "spring", stiffness: 150, damping: 8 },
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
