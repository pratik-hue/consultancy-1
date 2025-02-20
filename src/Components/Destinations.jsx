
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion"; // Import useInView
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import canadaImg from "../assets/canada.jpg";
import australiaImg from "../assets/australia.jpg";
import ukImg from "../assets/uk.jpg";
import usImg from "../assets/us.jpg";
import germanyImg from "../assets/germany.jpg";
import franceImg from "../assets/france.jpg";
import italyImg from "../assets/italy.jpg";
import singaporeImg from "../assets/singapore.jpg";
import newzealandImg from "../assets/newzealand.jpg";
import dubaiImg from "../assets/dubai.jpg";

const destinations = [
  {id:"1", name: "Canada", image: canadaImg, description: "Explore visa options for students, professionals, and families." },
  { id:"2",name: "Australia", image: australiaImg, description: "Opportunities for skilled workers, students, and tourists." },
  { id:"3",name: "United Kingdom", image: ukImg, description: "Learn about working, studying, and living in the UK." },
  { id:"4",name: "United States", image: usImg, description: "Explore visa options for various categories and programs." },
  { id:"5",name: "Germany", image: germanyImg, description: "Work, study, or settle in Germany with the right visa." },
  { id:"6",name: "France", image: franceImg, description: "Discover visa opportunities in the heart of Europe." },
  { id:"7",name: "Italy", image: italyImg, description: "Live and work in Italy with various visa categories." },
  { id:"8",name: "Singapore", image: singaporeImg, description: "Explore opportunities in one of Asia’s financial hubs." },
  { id:"9",name: "New Zealand", image: newzealandImg, description: "Student and work visa opportunities in New Zealand." },
  { id:"10",name: "Dubai", image: dubaiImg, description: "Business, work, and tourist visas for Dubai and UAE." },
];

const UniqueDestinationCards = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Detect when component is in view

  return (
    <section ref={ref} className="py-20 bg-gray-50 text-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title Animation (only when scrolled into view) */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Choose Your Destination
        </motion.h2>

        {/* Swiper without Arrows */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-500 w-full max-w-sm bg-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeInOut" }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-100 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-100 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-lg text-white text-center opacity-90">{item.description}</p>

                  {/* Learn More Button */}
                  <motion.button
                                     className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full flex items-center transition-transform duration-300"
                                     onClick={() => navigate(`/destination/${item.name.toLowerCase()}`)}
                                     >
                                     Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UniqueDestinationCards;
