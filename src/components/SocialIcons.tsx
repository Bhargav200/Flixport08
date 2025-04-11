import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="fixed bottom-0 left-0 md:right-6 md:top-1/2 md:left-auto md:bottom-auto md:transform md:-translate-y-1/2 flex md:flex-col gap-6 z-50 bg-black/50 md:bg-transparent p-4 md:p-0 w-full md:w-auto justify-center">
      <a
        href="https://github.com/Bhargav200"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 transition-colors duration-300"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/bhargavraviteja/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 transition-colors duration-300"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
