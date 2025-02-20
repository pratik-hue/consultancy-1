import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">Rudra Immigration</h2>
            <p className="text-sm mt-2 text-gray-400">
              Your trusted partner for global visa and immigration services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/exams" className="hover:text-white">Exams</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Email: support@Rudra.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Rudra Immigration. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
