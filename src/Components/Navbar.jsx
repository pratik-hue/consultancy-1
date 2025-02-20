import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Rudra Immigration
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/exams" className="text-gray-700 hover:text-blue-600">Exams</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

          </div>

          {/* Contact Button */}
         

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          <Link to="/consultation" className="block text-center bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition">
            Get Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
