import React from 'react';
import { Lightbulb } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const showTechFacts = ['/', '/contact'].includes(location.pathname);

  const techFacts = [
    'The first computer virus was created in 1983',
    'The first computer mouse was made of wood',
    'The first domain name ever registered was Symbolics.com',
    'The first computer programmer was a woman - Ada Lovelace',
    'The first computer game was created in 1962',
    'Bitcoin\'s creator remains anonymous to this day',
    'The first website is still online at info.cern.ch'
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-green-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        {showTechFacts && (
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-green-400 font-['Press_Start_2P'] tracking-wider whitespace-nowrap">
                GUESS WHAT
              </h2>
              <Lightbulb size={20} className="text-yellow-400 animate-pulse" />
            </div>
            <div className="h-8 w-full overflow-hidden">
              <TypeWriter
                text={techFacts}
                className="text-sm text-green-400 font-mono"
                delay={50}
                infinite
              />
            </div>
          </div>
        )}
        <div className="text-center text-xs text-gray-500 mt-2">
          <p>&copy; {new Date().getFullYear()} APBRT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;