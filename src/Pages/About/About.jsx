import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";

const About = () => {
  return (
<DefaultLayout>
    {/* Hero Section */}
      <section className="relative bg-[url('https://source.unsplash.com/1600x900/?business,office')] bg-cover bg-center h-80 flex items-center justify-center">
        <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-4xl font-bold text-white z-10">About Us</h1>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mt-4">
              We are a trusted visa consultancy helping individuals and families
              fulfill their dreams of studying, working, and settling abroad.
              Our expert guidance ensures a smooth application process for
              various visa categories.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/600x400/?meeting,discussion"
            alt="Consultancy Team"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To provide hassle-free visa services with a commitment to
                transparency and efficiency.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be a globally recognized visa consultancy, making
                international travel and settlement easier for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700">Expert Guidance</h3>
              <p className="text-gray-600 mt-2">
                Our consultants have years of experience in visa processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700">High Success Rate</h3>
              <p className="text-gray-600 mt-2">
                We have successfully helped thousands achieve their visa goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700">Customer Support</h3>
              <p className="text-gray-600 mt-2">
                We provide 24/7 support for all your visa-related queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* (Optional) Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <div className="text-center">
              <img
                src="https://source.unsplash.com/150x150/?man,portrait"
                alt="Team Member"
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">John Doe</h3>
              <p className="text-gray-600">Founder & Visa Consultant</p>
            </div>
            <div className="text-center">
              <img
                src="https://source.unsplash.com/150x150/?woman,portrait"
                alt="Team Member"
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Jane Smith</h3>
              <p className="text-gray-600">Immigration Expert</p>
            </div>
            <div className="text-center">
              <img
                src="https://source.unsplash.com/150x150/?businessman"
                alt="Team Member"
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Michael Lee</h3>
              <p className="text-gray-600">Senior Consultant</p>
            </div>
          </div>
        </div>
      </section>
      </DefaultLayout>  );
};

export default About;
