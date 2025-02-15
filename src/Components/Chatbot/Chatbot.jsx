import React, { useState } from "react";
import { BsRobot, BsSend } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I received your message. How can I help further?", sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-8 flex flex-col items-end z-50">
      {/* Floating Chatbot Icon */}
      <button
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        onClick={toggleChatbot}
      >
        {isOpen ? <IoClose size={24} /> : <BsRobot size={24} />}
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-72 sm:w-80 md:w-96 bg-white shadow-lg rounded-lg border border-gray-300 mt-3"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
              <span className="font-semibold">Chatbot</span>
            </div>

            {/* Chat Messages */}
            <div className="h-60 sm:h-64 p-3 overflow-y-auto flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 max-w-xs sm:max-w-sm rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-300 text-gray-800 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="p-3 border-t flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border p-2 rounded-l-lg focus:outline-none text-sm"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
              >
                <BsSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
