import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../Components/DefaultLayout";
import { FaCheckCircle, FaBookOpen, FaCalendarAlt, FaUserGraduate, FaClock } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

// Import images
import ielts from "../assets/ielts.png";
import toefl from "../assets/toefl.jpg";
import duolingo from "../assets/toefl.jpg";
import pte from "../assets/toefl.jpg";

const exams = {
  ielts: {
    title: "IELTS - International English Language Testing System",
    description:
      "IELTS is a globally recognized English language proficiency test for study, work, and migration. It assesses listening, reading, writing, and speaking skills.",
    image: ielts,
    highlights: [
      "Accepted by 11,000+ institutions worldwide",
      "Two formats: Academic & General Training",
      "Scored on a 9-band scale",
      "Test duration: 2 hours 45 minutes",
      "Conducted in over 140 countries",
      "Paper-based and computer-delivered options",
    ],
    eligibility: "Anyone can take the IELTS test, recommended for students, professionals, and migrants.",
    testStructure: [
      { section: "Listening", duration: "30 minutes", description: "Four recorded conversations and monologues." },
      { section: "Reading", duration: "60 minutes", description: "Three long reading passages with tasks." },
      { section: "Writing", duration: "60 minutes", description: "Two tasks: an essay and a graph/letter analysis." },
      { section: "Speaking", duration: "11-14 minutes", description: "Face-to-face interview with an examiner." },
    ],
    scoreGuide: [
      { band: "9", meaning: "Expert user" },
      { band: "8", meaning: "Very good user" },
      { band: "7", meaning: "Good user" },
      { band: "6", meaning: "Competent user" },
      { band: "5", meaning: "Modest user" },
      { band: "4", meaning: "Limited user" },
    ],
    preparationTips: [
      "Practice listening to different accents.",
      "Read newspapers and books to improve comprehension.",
      "Write essays daily to improve writing skills.",
      "Engage in English conversations for better speaking ability.",
      "Take mock tests to familiarize yourself with the format.",
    ],
  },
  toefl: {
    title: "TOEFL - Test of English as a Foreign Language",
    description:
      "TOEFL is widely accepted by universities and institutions to measure English proficiency for non-native speakers.",
    image: toefl,
    highlights: [
      "Accepted by 160+ countries",
      "Focuses on academic English",
      "Computer-based & internet-based testing",
      "Test duration: 3 hours",
      "Scores valid for 2 years",
      "Includes integrated tasks combining skills",
    ],
    eligibility: "Recommended for students applying to universities where English is the medium of instruction.",
    testStructure: [
      { section: "Reading", duration: "54-72 minutes", description: "Read passages and answer questions." },
      { section: "Listening", duration: "41-57 minutes", description: "Listen to conversations and answer questions." },
      { section: "Speaking", duration: "17 minutes", description: "Speak on given topics." },
      { section: "Writing", duration: "50 minutes", description: "Write responses based on reading and listening tasks." },
    ],
    scoreGuide: [
      { band: "110-120", meaning: "Excellent" },
      { band: "90-109", meaning: "Very Good" },
      { band: "80-89", meaning: "Good" },
      { band: "60-79", meaning: "Average" },
      { band: "40-59", meaning: "Below Average" },
    ],
    preparationTips: [
      "Improve reading speed and comprehension.",
      "Practice listening to academic lectures.",
      "Speak on random topics daily to improve fluency.",
      "Write structured essays with proper grammar.",
      "Take online TOEFL practice tests.",
    ],
  },
  duolingo: {
    title: "Duolingo English Test (DET)",
    description:
      "Duolingo English Test is a fast, affordable, and accessible online English proficiency test for university admissions and professional certification.",
    image: duolingo,
    highlights: [
      "Accepted by 4,500+ institutions worldwide",
      "Conducted online from home",
      "AI-powered adaptive test",
      "Test duration: 1 hour",
      "Results available within 48 hours",
      "Video interview & writing sample included",
    ],
    eligibility: "Open to anyone needing an English proficiency test for education or professional purposes.",
    testStructure: [
      { section: "Adaptive Test", duration: "45 minutes", description: "Assesses reading, writing, speaking, and listening skills." },
      { section: "Video Interview", duration: "10 minutes", description: "Open-ended responses recorded for evaluation." },
    ],
    scoreGuide: [
      { band: "130-160", meaning: "Advanced" },
      { band: "110-125", meaning: "Upper Intermediate" },
      { band: "90-105", meaning: "Intermediate" },
      { band: "70-85", meaning: "Basic" },
      { band: "<70", meaning: "Needs Improvement" },
    ],
    preparationTips: [
      "Take sample tests on Duolingo’s official site.",
      "Practice answering open-ended questions confidently.",
      "Improve typing speed for the writing section.",
      "Enhance vocabulary with daily reading and writing exercises.",
      "Ensure a quiet environment for taking the test at home.",
    ],
  },
  pte: {
    title: "PTE - Pearson Test of English",
    description:
      "PTE is a computer-based English proficiency test for study, work, and migration, known for its fast results and AI-based scoring.",
    image: pte,
    highlights: [
      "Accepted by 3,000+ universities and governments worldwide",
      "Fully computerized assessment",
      "Results available within 48 hours",
      "Test duration: 2 hours",
      "Three main sections: Speaking & Writing, Reading, and Listening",
      "No human bias in scoring due to AI evaluation",
    ],
    eligibility: "Anyone who needs to prove their English proficiency for study, work, or immigration purposes.",
    testStructure: [
      { section: "Speaking & Writing", duration: "54-67 minutes", description: "Tests pronunciation, fluency, and writing skills." },
      { section: "Reading", duration: "29-30 minutes", description: "Assess comprehension through multiple-choice and fill-in-the-blanks." },
      { section: "Listening", duration: "30-43 minutes", description: "Evaluate listening ability through summaries and multiple-choice questions." },
    ],
    scoreGuide: [
      { band: "85-90", meaning: "Expert" },
      { band: "76-84", meaning: "Very Good" },
      { band: "59-75", meaning: "Good" },
      { band: "43-58", meaning: "Average" },
      { band: "<43", meaning: "Needs Improvement" },
    ],
    preparationTips: [
      "Familiarize yourself with the PTE test format.",
      "Practice speaking fluently with a clear accent.",
      "Enhance listening skills by watching English news and lectures.",
      "Work on grammar and sentence structure for writing tasks.",
      "Take PTE mock tests to improve time management.",
    ],
  },
};

  

// Variants for animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ExamDetail = () => {
  const { examId } = useParams();
  const exam = exams[examId];

  if (!exam) {
    return (
      <DefaultLayout>
        <div className="text-center text-gray-600 py-20 text-xl">Exam not found.</div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* Header Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative h-[350px] flex items-center justify-center">
        <img src={exam.image} alt={exam.title} className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl font-bold">{exam.title}</h1>
        </div>
      </motion.div>

      {/* Exam Details Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800">{exam.title}</h2>
        <p className="text-lg text-gray-600 mt-4">{exam.description}</p>

        {/* Key Highlights */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">Key Highlights</h3>
        <ul className="mt-4 space-y-3">
          {exam.highlights.map((highlight, index) => (
            <motion.li key={index} variants={slideIn} initial="hidden" animate="visible" className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-600 mr-3" />
              {highlight}
            </motion.li>
          ))}
        </ul>

        {/* Eligibility */}
        {exam.eligibility && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg text-gray-600 mt-2">{exam.eligibility}</p>
          </motion.div>
        )}

        {/* Test Structure */}
        {exam.testStructure && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Test Structure</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {exam.testStructure.map((section, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-4 border rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-gray-700">{section.section}</h4>
                  <p className="text-sm text-gray-500 flex items-center mt-2">
                    <FaClock className="mr-2 text-blue-600" /> {section.duration}
                  </p>
                  <p className="text-gray-600 mt-2">{section.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Score Guide */}
        {exam.scoreGuide && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Score Interpretation</h3>
            <table className="w-full mt-4 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-3">Band Score</th>
                  <th className="border border-gray-300 p-3">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {exam.scoreGuide.map((score, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-3">{score.band}</td>
                    <td className="border border-gray-300 p-3">{score.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Preparation Tips */}
        {exam.preparationTips && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Preparation Tips</h3>
            <ul className="mt-4 space-y-3">
              {exam.preparationTips.map((tip, index) => (
                <motion.li key={index} variants={slideIn} initial="hidden" animate="visible" className="flex items-center text-gray-700">
                  <FaBookOpen className="text-blue-600 mr-3" />
                  {tip}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-12 text-center">
          <a href="/register" className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg">
            Register Now
          </a>
        </motion.div>
      </motion.div>
    </DefaultLayout>
  );
};

export default ExamDetail;
