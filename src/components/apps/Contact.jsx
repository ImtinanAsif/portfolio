// src/components/apps/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-6 text-green-400 font-mono overflow-y-auto">
      <h1 className="text-3xl md:text-5xl glitch-text text-red-500 mb-4">
        Terminal Contact
      </h1>

      {!messageSent ? (
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
          <label className="block">
            <span className="text-sm">> Name:</span>
            <input
              required
              className="w-full mt-1 bg-black/70 border border-red-500 text-white p-2 rounded shadow-inner"
              type="text"
              placeholder="e.g. Imtinan"
            />
          </label>
          <label className="block">
            <span className="text-sm">> Email:</span>
            <input
              required
              className="w-full mt-1 bg-black/70 border border-red-500 text-white p-2 rounded shadow-inner"
              type="email"
              placeholder="e.g. imtinan@email.com"
            />
          </label>
          <label className="block">
            <span className="text-sm">> Message:</span>
            <textarea
              required
              className="w-full mt-1 bg-black/70 border border-red-500 text-white p-2 rounded shadow-inner"
              rows="4"
              placeholder="Type your message..."
            />
          </label>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-2 bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded border border-white"
          >
            Send Command
          </motion.button>
        </form>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-lg mt-4"
        >
          > Message sent successfully. Awaiting response...
        </motion.p>
      )}
    </div>
  );
}
