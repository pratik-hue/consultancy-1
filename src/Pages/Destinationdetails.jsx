import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DefaultLayout from "../Components/DefaultLayout";
import canadaImg from "../assets/canada.jpg";
import australiaImg from "../assets/australia.jpg";
import ukImg from "../assets/uk.jpg";
import usImg from "../assets/us.jpg";
import germanyImg from "../assets/us.jpg";
import franceImg from "../assets/us.jpg";
import italyImg from "../assets/us.jpg";
import singaporeImg from "../assets/us.jpg";
import newzealandImg from "../assets/us.jpg";
import dubaiImg from "../assets/us.jpg";

const destinations = [
  {
    id: 1,
    name: "Canada",
    title: "Study In Canada",
    introduction:
      "Canada is known for its high-quality education, diverse culture, and welcoming atmosphere for international students.",
    image: canadaImg,
    description:
      "Canada provides an excellent education system and post-graduation work permits.",
    details:
      "Canada has top-ranked universities, diverse courses, and affordable education. With a strong focus on research and innovation, students have access to world-class facilities and industry connections. Canadian institutions offer scholarships and financial aid options for international students, making it a cost-effective study destination."
  },
  {
    id: 2,
    name: "Australia",
    title: "Study In Australia",
    introduction:
      "Australia is a top destination for international students with world-class education institutions and a great quality of life.",
    image: australiaImg,
    description: "Study in one of the most student-friendly countries in the world.",
    details:
      "Australian universities are globally recognized, offering various career paths. The country provides extensive opportunities for internships, industry collaborations, and part-time work, allowing students to gain practical experience alongside studies. With stunning landscapes and vibrant city life, students enjoy a balanced lifestyle in Australia."
  },
  {
    id: 3,
    name: "United Kingdom",
    title: "Study In United Kingdom",
    introduction:
      "The United Kingdom consists of England, Wales, Scotland, and Northern Ireland. It is known for its prestigious universities and diverse cultural experiences.",
    image: ukImg,
    description: "Study in one of the world's most prestigious education systems.",
    details:
      "UK offers high-quality education, international recognition, and work opportunities."
  },
  {
    id: 4,
    name: "United States",
    title: "Study In United States",
    introduction:
      "The US is home to top-ranked universities, diverse academic programs, and global career opportunities.",
    image: usImg,
    description: "Home to Ivy League and top-ranked global universities.",
    details:
      "The US provides academic excellence, cutting-edge research, and innovation opportunities."
  },
  {
    id: 5,
    name: "Germany",
    title: "Study In Germany",
    introduction:
      "Germany is a hub for higher education, offering free or low-cost tuition for international students.",
    image: germanyImg,
    description: "Work, study, or settle in Germany with the right visa.",
    details:
      "Germany offers job-seeker visas, student visas, and EU Blue Cards for skilled professionals. With a strong economy and numerous research opportunities, Germany is a top choice for international students."
  },
  {
    id: 6,
    name: "France",
    title: "Study In France",
    introduction:
      "France is home to some of the world's most prestigious institutions, offering high-quality education and cultural exposure.",
    image: franceImg,
    description: "Discover visa opportunities in the heart of Europe.",
    details:
      "France provides options for students, employees, entrepreneurs, and family reunification visas. Studying in France also means access to affordable tuition fees and scholarships."
  },
  {
    id: 7,
    name: "Italy",
    title: "Study In Italy",
    introduction:
      "Italy offers a rich cultural heritage and a wide range of academic programs in various fields of study.",
    image: italyImg,
    description: "Live and work in Italy with various visa categories.",
    details:
      "Italy has visa options for investors, skilled workers, students, and family reunification. International students can experience top-notch education while enjoying Italy’s history and lifestyle."
  },
  {
    id: 8,
    name: "Singapore",
    title: "Study In Singapore",
    introduction:
      "Singapore is a leading global education hub, offering innovative and industry-relevant courses.",
    image: singaporeImg,
    description: "Explore opportunities in one of Asia’s financial hubs.",
    details:
      "Singapore offers employment passes, student visas, and entrepreneur schemes. With its strategic location and advanced education system, Singapore is an ideal destination for students and professionals alike."
  },
  {
    id: 9,
    name: "New Zealand",
    title: "Study In New Zealand",
    introduction:
      "New Zealand provides a world-class education system, a safe environment, and abundant job opportunities.",
    image: newzealandImg,
    description: "Student and work visa opportunities in New Zealand.",
    details:
      "New Zealand provides work-to-residence pathways and student visa options for international applicants. The country's institutions focus on research, innovation, and hands-on learning experiences."
  },
  {
    id: 10,
    name: "Dubai",
    title: "Study In Dubai",
    introduction:
      "Dubai offers a unique blend of global education institutions and career opportunities in a dynamic economy.",
    image: dubaiImg,
    description: "Business, work, and tourist visas for Dubai and UAE.",
    details:
      "Dubai's visa system includes investor visas, employment visas, and Golden Visas for long-term residency. With a growing economy and world-class universities, Dubai is becoming a preferred destination for students and professionals."
  }
];


const DestinationDetails = () => {
    const { name } = useParams();
    const [destination, setDestination] = useState(null);
  
    useEffect(() => {
      if (!name) return;
  
      const foundDestination = destinations.find(
        (dest) => dest.name.toLowerCase() === name.toLowerCase()
      );
  
      setDestination(foundDestination || null);
    }, [name]);
  
    if (!destination) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <p className="text-2xl font-semibold text-gray-700">Destination not found</p>
        </div>
      );
    }
  
    return (
      <DefaultLayout>
        <motion.section 
          className="bg-gray-100 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Hero Section */}
            <motion.div 
              className="relative h-96 w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">{destination.title || destination.name}</h1>
              </div>
            </motion.div>
  
            {/* Content Section */}
            <motion.div 
              className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <motion.h2 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.05 }}>Introduction</motion.h2>
                <p className="text-lg text-gray-700 leading-relaxed">{destination.introduction}</p>
  
                <motion.h2 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.05 }}>Why Choose {destination.name}?</motion.h2>
                <p className="text-lg text-gray-700 leading-relaxed">{destination.description}</p>
  
                <motion.h2 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.05 }}>Details</motion.h2>
                <p className="text-lg text-gray-700 leading-relaxed">{destination.details}</p>
              </div>
              
              {/* Sidebar */}
              <motion.div 
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Top Universities:</strong> University of Toronto, McGill University, University of British Columbia</li>
                  <li><strong>Tuition Fees:</strong> $10,000 - $50,000 per year</li>
                  <li><strong>Post-Study Work Permit:</strong> Available up to 3 years</li>
                  <li><strong>Part-Time Work:</strong> Up to 20 hours per week during studies</li>
                  <li><strong>PR Opportunities:</strong> Various immigration pathways for international graduates</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </DefaultLayout>
    );
  };
  
  export default DestinationDetails;
  