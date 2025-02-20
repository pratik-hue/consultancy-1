import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaPassport, FaPlaneDeparture, FaCheckCircle,FaUsers ,FaArrowLeft , FaGlobeAmericas } from "react-icons/fa";

import student1 from "../assets/student1.jpg";
import work from "../assets/work.jpg";
import couple from "../assets/couple.jpg";
import family from "../assets/family.jpg";
import DefaultLayout from "../Components/DefaultLayout";

const services = [
    {
      id: 1,
      title: "Student Visa Assistance",
      description: "We specialize in helping students fulfill their dreams of studying abroad by simplifying the visa process. Our services include personalized consultation for university and course selection, assistance in preparing and verifying necessary documentation, and guidance on securing scholarships and financial aid. We ensure that students receive step-by-step support throughout the visa application process, from initial consultation to pre-departure orientation. Additionally, we provide post-arrival assistance, helping students with accommodation and adaptation to their new environment.",
      image: student1,
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      details: {
        keyFeatures: [
          "Personalized consultation for university and course selection",
          "Expert guidance on visa application and documentation",
          "Scholarship and financial aid assistance",
          "Pre-departure orientation and travel support",
          "Post-arrival assistance for accommodation and adaptation",
        ],
        eligibility: [
          "Admission to a recognized foreign university",
          "Proof of sufficient funds for tuition and living expenses",
          "Valid passport with a minimum of 6 months validity",
          "Medical examination and health insurance",
        ],
        requiredDocuments: [
          "University admission letter",
          "Academic transcripts and certificates",
          "Financial proof (bank statements, sponsorship letters)",
          "English proficiency test results (IELTS, TOEFL, PTE)",
          "Statement of Purpose (SOP) and Letter of Recommendation (LOR)",
        ],
        applicationProcess: [
          "Step 1: Free consultation and profile assessment",
          "Step 2: University selection and application submission",
          "Step 3: Document preparation and verification",
          "Step 4: Visa application filing and submission",
          "Step 5: Visa interview preparation (if required)",
          "Step 6: Visa approval and pre-departure planning",
        ],
      },
    },
    {
      id: 2,
      title: "Work Visa Solutions",
      description: "Our work visa solutions are designed for professionals seeking job opportunities in foreign countries. We provide expert guidance on selecting the right visa category, job search assistance, and employer sponsorship. Our team ensures that all required documents are correctly prepared and submitted while maintaining legal compliance with work permit regulations. Beyond visa approval, we offer post-arrival support, including residency registration and settlement guidance, helping professionals establish themselves in a new country.",
      image: work,
      icon: <FaBriefcase className="text-4xl text-green-600" />,
      details: {
        keyFeatures: [
          "Guidance on selecting the right work visa category",
          "Job search assistance and employer sponsorship",
          "Application preparation and document verification",
          "Legal compliance support for work permits",
          "Post-arrival assistance with residency registration",
        ],
        eligibility: [
          "Valid job offer from a foreign employer",
          "Relevant work experience in the required field",
          "Valid passport and proof of qualifications",
          "Medical clearance and background check",
        ],
        requiredDocuments: [
          "Job offer letter and employment contract",
          "Work experience letters and professional certificates",
          "Educational credentials and transcripts",
          "Police clearance certificate",
          "Health examination reports",
        ],
        applicationProcess: [
          "Step 1: Free consultation and eligibility assessment",
          "Step 2: Job application and employer sponsorship",
          "Step 3: Work visa application submission",
          "Step 4: Document verification and embassy processing",
          "Step 5: Visa stamping and travel arrangements",
        ],
      },
    },
    {
      id: 3,
      title: "PR & Immigration Consultancy",
      description: "For individuals looking to settle abroad permanently, we offer comprehensive PR (Permanent Residency) and immigration consultancy services. Our team provides eligibility assessments, guidance on various immigration programs such as Express Entry, Skilled Worker, and Investor Programs, and complete document preparation. We assist clients in application submission, interview coaching, and ensuring all legal requirements are met. Additionally, we offer post-landing support, helping clients adapt to their new country with ease.",
      image: couple,
      icon: <FaPassport className="text-4xl text-yellow-500" />,
      details: {
        keyFeatures: [
          "PR eligibility assessment and points calculation",
          "Guidance on Express Entry, Skilled Worker, and Investor Programs",
          "Complete document preparation and legal support",
          "Application submission and interview coaching",
          "Post-landing settlement assistance",
        ],
        eligibility: [
          "Minimum required work experience in the chosen field",
          "Proof of language proficiency (IELTS, TOEFL, etc.)",
          "Valid job offer (if applicable)",
          "Clean criminal record and medical clearance",
        ],
        requiredDocuments: [
          "Educational degrees and transcripts",
          "Work experience letters and employment contracts",
          "Language test results",
          "Medical and police clearance certificates",
        ],
        applicationProcess: [
          "Step 1: PR eligibility evaluation and profile creation",
          "Step 2: Expression of Interest (EOI) submission",
          "Step 3: Invitation to Apply (ITA) if selected",
          "Step 4: Complete application submission with supporting documents",
          "Step 5: PR visa approval and relocation planning",
        ],
      },
    },
    {
      id: 4,
      title: "Tourist & Business Visas",
      description: "Our tourist and business visa services are designed for individuals planning short-term international travel for leisure or work. We offer fast-track visa processing, guidance on single and multiple-entry visas, and assistance with travel planning, including hotel bookings and itinerary management. Our team also provides visa interview coaching and emergency visa services for urgent travel requirements. Whether you are planning a vacation or attending a business event abroad, we ensure a smooth and hassle-free visa process.",
      image: family,
      icon: <FaPlaneDeparture className="text-4xl text-red-500" />,
      details: {
        keyFeatures: [
          "Fast-track visa processing",
          "Guidance on single and multiple-entry visas",
          "Travel itinerary planning and hotel bookings",
          "Visa interview coaching",
          "Emergency visa services for urgent travel",
        ],
        eligibility: [
          "Valid passport with at least 6 months validity",
          "Proof of sufficient funds for travel and stay",
          "Confirmed travel itinerary and accommodation details",
          "No criminal record",
        ],
        requiredDocuments: [
          "Bank statements (last 6 months)",
          "Flight ticket reservations",
          "Hotel booking confirmation",
          "Visa application form and travel insurance",
        ],
        applicationProcess: [
          "Step 1: Consultation and travel planning",
          "Step 2: Document collection and verification",
          "Step 3: Visa application submission",
          "Step 4: Interview (if required)",
          "Step 5: Visa approval and travel confirmation",
        ],
      },
    },
    {
      id: 5,
      title: "Immigrant Visa",
      description: "Our immigrant visa services assist individuals and families in obtaining permanent residence in a foreign country. Whether through employment, family sponsorship, or investment programs, we provide end-to-end support in navigating the complex immigration process. Our expert consultants ensure that all legal requirements are met, and we guide applicants from eligibility assessment to post-arrival settlement, helping them transition smoothly to their new country.",
      image: family, // Replace with actual image import
      icon: <FaGlobeAmericas className="text-4xl text-indigo-600" />, 
      details: {
        keyFeatures: [
          "Comprehensive consultation for immigrant visa programs",
          "Guidance on employment-based, family-sponsored, and investment visas",
          "Complete document verification and application processing",
          "Legal compliance and interview preparation",
          "Post-arrival assistance for settlement and adaptation",
        ],
        eligibility: [
          "Sponsorship from a family member or employer",
          "Investment in the destination country (if applicable)",
          "Proof of financial stability and employment history",
          "Clean criminal record and medical clearance",
        ],
        requiredDocuments: [
          "Valid passport",
          "Sponsorship or job offer letter (if applicable)",
          "Financial proof (bank statements, investment records, etc.)",
          "Educational and professional qualifications",
          "Medical and police clearance certificates",
        ],
        applicationProcess: [
          "Step 1: Free consultation and eligibility assessment",
          "Step 2: Selection of the appropriate immigrant visa program",
          "Step 3: Document preparation and verification",
          "Step 4: Visa application submission",
          "Step 5: Interview and background check (if required)",
          "Step 6: Visa approval and relocation support",
        ],
      },
    },
    
    {
      id: 6,
      title: "Investor Visa Consulting",
      description: "Our investor visa consulting service is tailored for entrepreneurs and business owners seeking to expand their ventures abroad. We provide expert guidance on investment-based visa eligibility, legal and financial consultation, and support with business registration and compliance. Our team ensures that investors meet country-specific requirements and assists with preparing a strong business plan for approval. We streamline the visa application process, making it easier for investors to establish themselves in foreign markets.",
      image: family,
      icon: <FaBriefcase className="text-4xl text-blue-500" />,
      details: {
        keyFeatures: [
          "Investment-based visa eligibility guidance",
          "Legal and financial consultation",
          "Business registration and compliance support",
        ],
        eligibility: [
          "Minimum investment as per country guidelines",
          "Business experience in the relevant field",
        ],
        requiredDocuments: [
          "Business plan",
          "Financial statements",
        ],
        applicationProcess: [
          "Step 1: Investor eligibility assessment",
          "Step 2: Business plan approval",
          "Step 3: Visa application submission",
        ],
      },
    },
    {
      id: 7,
      title: "Dependent Visa Assistance",
      description: "Reuniting families is our priority, and our dependent visa assistance service helps spouses, children, and parents join their loved ones abroad. We provide complete support in preparing visa applications, ensuring eligibility criteria are met, and handling legal documentation. Our consultants guide applicants through every step, from eligibility assessment to visa approval. We also offer post-arrival support, ensuring a smooth transition and settlement for dependents in their new country.",
      image: family,
      icon: <FaUsers className="text-4xl text-purple-600" />,
      details: {
        keyFeatures: [
          "Guidance on dependent visa eligibility",
          "Complete application preparation",
          "Legal consultation for visa approval",
          "Post-arrival settlement support",
        ],
        eligibility: [
          "Valid relationship with sponsor (spouse, child, parent)",
          "Proof of financial stability",
          "Sponsor's valid visa or residency permit",
        ],
        requiredDocuments: [
          "Marriage or birth certificate",
          "Sponsor’s financial proof",
          "Accommodation details",
        ],
        applicationProcess: [
          "Step 1: Eligibility assessment",
          "Step 2: Document collection",
          "Step 3: Visa application submission",
          "Step 4: Interview (if applicable)",
          "Step 5: Visa approval and travel arrangements",
        ],
      },
    },

    {
      id: 8,
      title: "Exam Preparation Guidance",
      description: "We offer specialized training for international exams such as IELTS, TOEFL, and PTE...",
      image: family,
      icon: <FaGraduationCap className="text-4xl text-orange-600" />,
      path: "/exam-details", // ✅ Add this to navigate dynamically
      details: {
        keyFeatures: [
          "IELTS, TOEFL, PTE coaching",
          "Personalized training programs",
        ],
        eligibility: ["Aspiring students and professionals"],
        requiredDocuments: ["Identity proof"],
        applicationProcess: ["Step 1: Enrollment"],
      },
    },
    
  ];

  const ServiceDetails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = services.find((s) => s.id === parseInt(serviceId));
  
    if (!service) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center h-screen text-2xl text-red-500 font-semibold"
        >
          Service Not Found
        </motion.div>
      );
    }
  
    return (
      <DefaultLayout>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* Hero Section */}
          <div className="relative h-[350px] flex items-center justify-center bg-gray-900">
            <motion.img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover brightness-50 blur-sm"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative text-center text-white px-6">
              <motion.h1
                className="text-4xl font-bold tracking-wide drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
  
          {/* Main Content */}
          <section className="py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto px-6 bg-white rounded-lg shadow-lg p-8">
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-transform hover:scale-105 mb-6"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
  
              {/* Service Title & Description */}
              <motion.h2
                className="text-3xl font-semibold text-gray-800"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="text-gray-600 mt-4 leading-relaxed"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.description}
              </motion.p>
  
              {/* Key Features */}
              <motion.div
                className="mt-8 border border-gray-200 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.details.keyFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700 py-2 px-4 bg-gray-50 border-l-4 border-blue-500 rounded-md hover:shadow-sm transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCheckCircle className="text-blue-500 mr-2" /> {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
  
              {/* Eligibility Criteria */}
              <motion.div
                className="mt-8 border border-gray-200 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Eligibility Criteria</h3>
                <table className="w-full border-collapse border-gray-300 rounded-lg">
                  <tbody>
                    {service.details.eligibility.map((criteria, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 bg-white hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">{criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
  
              {/* Required Documents */}
              <motion.div
                className="mt-8 border border-gray-200 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Required Documents</h3>
                <table className="w-full border-collapse border-gray-300 rounded-lg">
                  <tbody>
                    {service.details.requiredDocuments.map((doc, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 bg-white hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">{doc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
  
              {/* Application Process */}
              <motion.div
                className="mt-8 border border-gray-200 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Application Process</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  {service.details.applicationProcess.map((step, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 bg-gray-50 border-l-4 border-green-500 rounded-md"
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </DefaultLayout>
    );
  };
  
  export default ServiceDetails;