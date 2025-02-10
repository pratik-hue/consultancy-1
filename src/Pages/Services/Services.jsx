import React from "react";
import { FaGraduationCap, FaBriefcase, FaPassport, FaPlaneDeparture } from "react-icons/fa";
import DefaultLayout from "../../Components/DefaultLayout";
import student1 from "../../assets/student1.jpg";
import work from "../../assets/work.jpg";
import couple from "../../assets/couple.jpg";

import family from "../../assets/family.jpg";
const services = [
  {
    title: "Student Visa Assistance",
    description:
      "We assist students in fulfilling their dreams of studying abroad by navigating the complex visa process with ease.",
    image: student1,
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
  },
  {
    title: "Work Visa Solutions",
    description:
      "Whether you're looking for new opportunities or a career abroad, we provide expert consultation for work visa applications.",
    image: work,
    icon: <FaBriefcase className="text-4xl text-green-600" />,
  },
  {
    title: "PR & Immigration Consultancy",
    description:
      "Our consultancy services help you through the immigration process, offering the best advice for permanent residency.",
      image: couple,
      icon: <FaPassport className="text-4xl text-yellow-500" />,
  },
  {
    title: "Tourist & Business Visas",
    description:
      "We offer efficient assistance for obtaining tourist and business visas, making international travel easier for you.",
    image: family,
    icon: <FaPlaneDeparture className="text-4xl text-red-500" />,
  },
];

const Services = () => {
  return (
<DefaultLayout>
{/* Hero Section */}
      <section className="relative bg-[url('https://source.unsplash.com/1600x900/?services,travel')] bg-cover bg-center h-80 flex items-center justify-center">
        <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-4xl font-bold text-white z-10">Our Services</h1>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center">What We Offer</h2>
          <p className="text-lg text-gray-600 text-center mt-4">
            Our team offers personalized, professional visa and immigration consulting to help you move
            across borders seamlessly.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 p-4 bg-white rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Get In Touch with Our Experts</h2>
          <p className="mt-4 text-lg">
            Let us assist you in taking the next step toward your dream destination. Our experts are here to
            guide you!
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      </DefaultLayout>  );
};

export default Services;
