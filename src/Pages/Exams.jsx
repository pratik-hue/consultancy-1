import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../Components/DefaultLayout";
import { FaArrowRight } from "react-icons/fa";

// Import exam images
import ielts from "../assets/ielts.png";
import toefl from "../assets/toefl.jpg";
import gre from "../assets/gre.jpg";
import sat from "../assets/sat.jpg";
import examBanner from "../assets/exam.jpg"; // Add a banner image for default view


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
    id: "gre",
    name: "GRE",
    description: "Ace verbal, quantitative & analytical skills for top universities.",
    image: gre,
    link: "/exams/gre",
  },
  {
    id: "sat",
    name: "SAT",
    description: "Score high and boost your college admission chances.",
    image: sat,
    link: "/exams/sat",
  },
];

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
          {exams.map((exam) => (
            <Link
              to={exam.link}
              key={exam.id}
              className="relative group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={exam.image}
                alt={exam.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{exam.name}</h3>
                <p className="text-gray-600 mt-2">{exam.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Learn More <FaArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Exams;
