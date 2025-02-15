import React from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../../Components/DefaultLayout";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <DefaultLayout>
      {/* Contact Information Section */}
      <motion.section
        className="py-25 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold text-gray-800" variants={fadeInUp}>
            Get in Touch
          </motion.h2>
          <motion.p className="text-gray-600 mt-4" variants={fadeInUp}>
            Have questions? Feel free to reach out to us via phone, email, or visit our office.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "📍 Our Office", text: "123 Visa Street, New York, USA" },
              { title: "📞 Call Us", text: "+1 234 567 890" },
              { title: "📧 Email Us", text: "support@visaconsultancy.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={zoomIn}
              >
                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center text-gray-800" variants={fadeInUp}>
            Send Us a Message
          </motion.h2>
          <motion.form
            className="mt-8 bg-gray-100 p-8 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Full Name", "Email Address"].map((placeholder, index) => (
                <motion.input
                  key={index}
                  type={index === 1 ? "email" : "text"}
                  placeholder={placeholder}
                  className="p-3 rounded-lg w-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  variants={fadeInUp}
                />
              ))}
            </div>
            <motion.input
              type="text"
              placeholder="Subject"
              className="p-3 mt-4 rounded-lg w-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={fadeInUp}
            />
            <motion.textarea
              placeholder="Your Message"
              className="p-3 mt-4 rounded-lg w-full border border-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              variants={fadeInUp}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              variants={zoomIn}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Google Map Embed Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center text-gray-800" variants={fadeInUp}>
            Visit Our Office
          </motion.h2>
          <motion.div className="mt-8 rounded-lg overflow-hidden shadow-md" variants={fadeInUp}>
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.9537353159044!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4a9b1df%3A0xb57f354c3d2f4d8!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1631792241013!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </DefaultLayout>
  );
};

export default Contact;
