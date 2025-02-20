import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Import exam images
import ielts from "../assets/ielts.png";
import toefl from "../assets/toefl.jpg";
import duolingo from "../assets/sat.jpg";
import pte from "../assets/pte.jpg";

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
    description: "Fast and convenient English test for study abroad & work.",
    image: duolingo,
    link: "/exams/duolingo",
  },
  {
    id: "pte",
    name: "PTE",
    description: "Computer-based English test accepted worldwide.",
    image: pte,
    link: "/exams/pte",
  },
];

const ExamCards = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Title Animation */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Select Your Exam Category
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          Click on an exam to explore details, preparation strategies, and expert guidance.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto"
              variants={{
                hidden: { opacity: 0, x: -50 }, // Slide from left
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }} // Stagger delay
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            >
              <Link to={exam.link} className="block group">
                <img src={exam.image} alt={exam.name} className="w-full h-40 object-cover" />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-all">
                    {exam.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{exam.description}</p>
                  <div className="mt-4 flex items-center justify-center text-blue-600 font-medium">
                    Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default ExamCards;