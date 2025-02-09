import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,passport')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Trusted Visa Consultancy Partner
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Get expert guidance on visa applications, immigration services, and travel consultancy.
        </p>
        <Link to="/services">
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
            Explore Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
