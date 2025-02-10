import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../Components/DefaultLayout";
import { FaCheckCircle, FaBookOpen, FaCalendarAlt, FaUserGraduate, FaClock } from "react-icons/fa";

// Import images
import ielts from "../assets/ielts.png";
import toefl from "../assets/toefl.jpg";
import gre from "../assets/gre.jpg";
import sat from "../assets/sat.jpg";

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
    gre: {
      title: "GRE - Graduate Record Examination",
      description:
        "GRE is a standardized test required for admission to many graduate schools worldwide, assessing verbal reasoning, quantitative reasoning, and analytical writing skills.",
      image: gre,
      highlights: [
        "Accepted worldwide for master's and PhD programs",
        "Two formats: GRE General & GRE Subject Test",
        "Measures critical thinking and problem-solving skills",
        "Test duration: 3 hours 45 minutes",
      ],
      eligibility: "Required for admission to graduate programs in various disciplines.",
      testStructure: [
        { section: "Analytical Writing", duration: "60 minutes", description: "Analyze an issue and an argument." },
        { section: "Verbal Reasoning", duration: "60 minutes", description: "Reading comprehension and vocabulary." },
        { section: "Quantitative Reasoning", duration: "70 minutes", description: "Mathematical problem-solving." },
      ],
      scoreGuide: [
        { band: "320-340", meaning: "Excellent" },
        { band: "300-319", meaning: "Very Good" },
        { band: "280-299", meaning: "Good" },
        { band: "260-279", meaning: "Below Average" },
        { band: "<260", meaning: "Needs Improvement" },
      ],
      preparationTips: [
        "Strengthen vocabulary with flashcards.",
        "Solve mathematical problems regularly.",
        "Practice reading comprehension daily.",
        "Write essays and get feedback.",
        "Take timed mock tests for better time management.",
      ],
    },
    sat: {
      title: "SAT - Scholastic Assessment Test",
      description:
        "SAT is a standardized test used for college admissions in the United States, evaluating mathematical and evidence-based reading & writing skills.",
      image: sat,
      highlights: [
        "Accepted by most U.S. colleges and universities",
        "Consists of Math, Reading, and Writing & Language sections",
        "Optional Essay section",
        "Test duration: 3 hours (3 hours 50 minutes with essay)",
      ],
      eligibility: "High school students seeking college admission, mainly in the U.S.",
      testStructure: [
        { section: "Reading", duration: "65 minutes", description: "Reading comprehension and analysis." },
        { section: "Writing & Language", duration: "35 minutes", description: "Grammar and language usage." },
        { section: "Math", duration: "80 minutes", description: "Algebra, problem-solving, and data analysis." },
        { section: "Essay (Optional)", duration: "50 minutes", description: "Evaluate an argument in a passage." },
      ],
      scoreGuide: [
        { band: "1400-1600", meaning: "Excellent" },
        { band: "1200-1399", meaning: "Very Good" },
        { band: "1000-1199", meaning: "Good" },
        { band: "800-999", meaning: "Below Average" },
        { band: "<800", meaning: "Needs Improvement" },
      ],
      preparationTips: [
        "Practice SAT sample papers regularly.",
        "Strengthen algebra and problem-solving skills.",
        "Improve reading comprehension with daily reading.",
        "Enhance grammar and writing techniques.",
        "Take full-length practice tests for time management.",
      ],
    },
  };
  

const ExamDetail = () => {
  const { examId } = useParams();
  const exam = exams[examId];

  if (!exam) {
    return (
      <DefaultLayout>
        <div className="text-center text-gray-600 py-20 text-xl">
          Exam not found.
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      {/* Header Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        <img src={exam.image} alt={exam.title} className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl font-bold">{exam.title}</h1>
        </div>
      </div>

      {/* Exam Details Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800">{exam.title}</h2>
        <p className="text-lg text-gray-600 mt-4">{exam.description}</p>

        {/* Key Highlights */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">Key Highlights</h3>
        <ul className="mt-4 space-y-3">
          {exam.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-600 mr-3" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Eligibility & Test Structure */}
        {exam.eligibility && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg text-gray-600 mt-2">{exam.eligibility}</p>
          </div>
        )}

        {exam.testStructure && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Test Structure</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {exam.testStructure.map((section, index) => (
                <div key={index} className="p-4 border rounded-lg shadow">
                  <h4 className="text-xl font-semibold text-gray-700">{section.section}</h4>
                  <p className="text-sm text-gray-500 flex items-center mt-2">
                    <FaClock className="mr-2 text-blue-600" /> {section.duration}
                  </p>
                  <p className="text-gray-600 mt-2">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Score Guide */}
        {exam.scoreGuide && (
          <div className="mt-10">
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
          </div>
        )}

        {/* Preparation Tips */}
        {exam.preparationTips && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800">Preparation Tips</h3>
            <ul className="mt-4 space-y-3">
              {exam.preparationTips.map((tip, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaBookOpen className="text-blue-600 mr-3" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="/register" className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg">
            Register for {exam.title}
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ExamDetail;
