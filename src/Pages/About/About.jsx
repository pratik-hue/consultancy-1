import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative bg-[url('https://source.unsplash.com/1600x900/?business,team')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-5xl font-bold text-white z-10 drop-shadow-lg text-center">
          About Us
        </h1>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-lg">
              We are a leading visa consultancy, helping individuals and families achieve their dreams of studying, working, and settling abroad. Our dedicated experts provide a smooth and hassle-free application process for various visa categories.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
          <img
            src="https://source.unsplash.com/600x400/?consulting,teamwork"
            alt="Consultancy Team"
            className="rounded-lg shadow-lg hover:shadow-2xl transition"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[{
              title: "Expert Guidance",
              description: "Years of experience in visa processing to ensure success.",
              img: "https://source.unsplash.com/100x100/?expert",
            }, {
              title: "High Success Rate",
              description: "Thousands of clients successfully secured visas with us.",
              img: "https://source.unsplash.com/100x100/?success",
            }, {
              title: "24/7 Support",
              description: "Round-the-clock assistance for all visa-related queries.",
              img: "https://source.unsplash.com/100x100/?support",
            }].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition transform hover:scale-105"
              >
                <img src={item.img} alt={item.title} className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[{
              name: "John Doe",
              role: "Founder & Visa Consultant",
              img: "https://source.unsplash.com/200x200/?man,portrait",
            }, {
              name: "Jane Smith",
              role: "Immigration Expert",
              img: "https://source.unsplash.com/200x200/?woman,portrait",
            }, {
              name: "Michael Lee",
              role: "Senior Consultant",
              img: "https://source.unsplash.com/200x200/?businessman",
            }].map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-white shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
