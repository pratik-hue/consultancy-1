import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Users } from "lucide-react";

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counters = [
    { id: 1, icon: <GraduationCap size={50} className="text-blue-600" />, count: 50, text: "Enrolled Students" },
    { id: 2, icon: <Globe size={50} className="text-blue-600" />, count: 100, text: "Visa Approvals" },
    { id: 3, icon: <Users size={50} className="text-blue-600" />, count: 10, text: "Years of Experience" },
  ];

  return (
    <div ref={ref} className="py-16 bg-white text-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {counters.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: item.id * 0.2 }}
            className="p-8 bg-white shadow-lg rounded-2xl border border-blue-200 hover:scale-105 transition-transform"
          >
            <div className="flex justify-center items-center mb-4">
              {item.icon}
            </div>
            <h2 className="text-5xl font-bold text-blue-600">
              {inView && <CountUp start={0} end={item.count} duration={2} delay={0} />}+
            </h2>
            <p className="text-lg mt-2 text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
