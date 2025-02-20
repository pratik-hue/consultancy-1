import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DefaultLayout from "../Components/DefaultLayout";
import { FaArrowRight } from "react-icons/fa";

// Import exam images
import ielts from "../assets/ielts.png";
import toefl from "../assets/toefl.jpg";
import duolingo from "../assets/sat.jpg";
import pte from "../assets/pte.jpg";
import examBanner from "../assets/exam.jpg";

const exams = [
  {
    id: "ielts",
    name: "IELTS",
    description: "Master English proficiency for global education & careers.",
    image: ielts,
    link: "/exams/ielts",
  },
  {
    id: "toefl",
    name: "TOEFL",
    description: "Achieve fluency and excel in academic & professional settings.",
    image: toefl,
    link: "/exams/toefl",
  },
  {
    id: "duolingo",
    name: "DUOLINGO",
    description: "A modern and adaptive English proficiency test for global success.",
    image: duolingo,
    link: "/exams/duolingo",
  },
  {
    id: "pte",
    name: "PTE",
    description: "Fast and fair English test trusted for work, study, and migration.",
    image: pte,
    link: "/exams/pte",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const Exams = () => {
  return (
    <DefaultLayout>
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        <img
          src={examBanner}
          alt="Exams Background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl font-bold">Unlock Your Potential with the Right Exam</h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            Choose the exam that suits your goals and take a step closer to success.
          </p>
        </div>
      </div>

      {/* Exam Categories Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Select Your Exam Category
        </h2>
        <p className="text-lg text-gray-600 text-center mt-2">
          Click on an exam to explore details, preparation strategies, and expert guidance.
        </p>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={exam.link}
                className="relative group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={exam.image}
                  alt={exam.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{exam.name}</h3>
                  <p className="text-gray-600 mt-2">{exam.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    Learn More <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
       {/* Call-to-Action Section */}
            <section className="py-16 bg-gray-100 text-center">
              <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  Get In Touch with Our Experts
                </motion.h2>
                <motion.p
                  className="mt-4 text-lg"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Let us assist you in taking the next step toward your dream destination. Our experts are here to guide you!
                </motion.p>
                <motion.a
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </section>
    </DefaultLayout>
  );
};

export default Exams;
