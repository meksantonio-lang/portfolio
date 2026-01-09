"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-800 p-10 mt-10 rounded-lg flex flex-col items-center space-y-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>

      <p className="text-lg text-center">
        You can reach me via email, GitHub, or LinkedIn.
      </p>

      <div className="flex space-x-6 mt-4">
        {/* Email */}
        <a
          href="mailto:meksantonio@gmail.com"
          className="hover:text-blue-400 transition-colors"
          title="Email me"
        >
          <FaEnvelope size={30} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/meksantonio-lang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          title="GitHub"
        >
          <FaGithub size={30} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}