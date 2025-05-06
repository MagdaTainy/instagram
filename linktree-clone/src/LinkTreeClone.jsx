import React from "react";
import { FaGlobe, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function LinkTreeClone() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md text-center">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-2xl font-semibold">Magda Tainy Nunes Amaral</h1>
        <p className="text-gray-400 text-sm mb-6">Desenvolvedora apaixonada por tecnologia e soluções criativas. Vamos nos conectar!</p>

        <div className="flex flex-col space-y-4">
          <a
            href="https://barbiescollectors.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-xl text-lg font-medium shadow-md hover:bg-gray-200 transition duration-300"
          >
            <FaGlobe /> Blog Pessoal
          </a>
          <a
            href="https://br.linkedin.com/in/magda-tainy-nunes-amaral"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-xl text-lg font-medium shadow-md hover:bg-gray-200 transition duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/magda.tainy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-xl text-lg font-medium shadow-md hover:bg-gray-200 transition duration-300"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="mailto:magdatnamaral@gmail.com"
            className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-xl text-lg font-medium shadow-md hover:bg-gray-200 transition duration-300"
          >
            <FaEnvelope /> E-mail
          </a>
        </div>
      </div>
    </div>
  );
}
