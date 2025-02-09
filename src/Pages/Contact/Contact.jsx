import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";

const Contact = () => {
  return (
    <DefaultLayout>

      {/* Hero Section */}
      <section className="relative bg-[url('https://source.unsplash.com/1600x900/?office,contact')] bg-cover bg-center h-80 flex items-center justify-center">
        <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
        <h1 className="text-4xl font-bold text-white z-10">Contact Us</h1>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-4">
            Have questions? Feel free to reach out to us via phone, email, or visit our office.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">📍 Our Office</h3>
              <p className="text-gray-600 mt-2">123 Visa Street, New York, USA</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">📞 Call Us</h3>
              <p className="text-gray-600 mt-2">+1 234 567 890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">📧 Email Us</h3>
              <p className="text-gray-600 mt-2">support@visaconsultancy.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Send Us a Message</h2>
          <form className="mt-8 bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-3 rounded-lg w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="email" placeholder="Email Address" className="p-3 rounded-lg w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <input type="text" placeholder="Subject" className="p-3 mt-4 rounded-lg w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea placeholder="Your Message" className="p-3 mt-4 rounded-lg w-full border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Visit Our Office</h2>
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.9537353159044!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4a9b1df%3A0xb57f354c3d2f4d8!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1631792241013!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      </DefaultLayout>  );
};

export default Contact;
