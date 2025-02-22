import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaPassport, FaPlaneDeparture } from "react-icons/fa";
import DefaultLayout from "../Components/DefaultLayout";
import student1 from "../assets/student1.jpg";
import work from "../assets/work.jpg";
import couple from "../assets/couple.jpg";
import examBanner from "../assets/servicebanner.jpg";
import family from "../assets/family.jpg";
import business from "../assets/business.jpg";
import inventor from "../assets/inventor.jpg";

import CounterSection from "../Components/ConterSection";
import { Link } from "react-router-dom";
import ielts from "../assets/ielts.png";

const services = [
  {
    id: "1",

    title: "Student Visa Assistance",
    description: "We assist students in fulfilling their dreams of studying abroad by navigating the complex visa process with ease.",
    image: student1,
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
  },
  {
    id: "2",
    title: "Immigrant Visa Assistance",
    description: "Expert guidance on obtaining immigrant visas, ensuring a smooth transition to your new country.",
    image: work,// Replace with a relevant image
    icon: <FaPassport className="text-4xl text-purple-600" />,
  },
  {
    id: "3",
    title: "Tourist  Visas",
    description: "We offer efficient assistance for obtaining tourist and business visas, making international travel easier for you.",
    image: couple,
    icon: <FaPlaneDeparture className="text-4xl text-red-500" />,
   
   }, {
      id: "4",
      title: "Business Visa Assistance",
      description: "We provide expert assistance in obtaining business visas, helping you navigate the application process for work, investment, or business activities abroad.",
      image: business, // Replace with a relevant image
      icon: <FaBriefcase className="text-4xl text-yellow-600" />, // You can change the color if desired
    },

  {
    id: "6",
    title: "Investor Visa Consulting",
    description: "Helping investors secure visas by providing end-to-end consulting for investment-based immigration.",
    image: inventor, // Replace with a relevant image
    icon: <FaBriefcase className="text-4xl text-blue-500" />,
  },
  {
    id: "7",
    title: "Dependent Visa Assistance",
    description: "We assist in securing dependent visas, ensuring a hassle-free process for family reunification.",
    image: family, // Replace with a relevant image
    icon: <FaGraduationCap className="text-4xl text-green-500" />,
  },
  {
    id: "8",
    title: "Exam Preparation Guidance",
    description: "Comprehensive coaching for IELTS, TOEFL, and other international exams to boost your visa approval chances.",
    image: ielts, // Replace with a relevant image
    icon: <FaGraduationCap className="text-4xl text-orange-600" />,
  },
];


const Services = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        <img src={examBanner} alt="Our Services Background" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl font-bold">Expert Visa & Immigration Services</h1>
          <p className="text-lg mt-3 max-w-3xl mx-auto">
            We provide professional guidance for student, work, PR, and tourist visas. Your journey starts here with expert advice and seamless processing.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mt-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our team offers personalized, professional visa and immigration consulting to help you move across borders seamlessly.
          </motion.p>

          {/* Animated Cards Grid */}
          <motion.div
          
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
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
            
            {services.map((service, index) => (
  <motion.div
    key={index}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
  >
    {/* Wrap the whole card with Link */}
    <Link to={`/service/${service.id}`} className="block">
      <div className="relative">
        <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 p-4 bg-white rounded-full shadow-md">{service.icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
        <p className="text-gray-600 mt-4">{service.description}</p>
      </div>
    </Link>
  </motion.div>
))}

          </motion.div>
        </div>
        
      </section>

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
      <CounterSection/>
    </DefaultLayout>
  );
};

export default Services;
