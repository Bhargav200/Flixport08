import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string | string[];
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  delay = 100,
  infinite = false,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

  useEffect(() => {
    const texts = Array.isArray(text) ? text : [text];
    let timeout: NodeJS.Timeout;

    if (currentIndex <= texts[currentArrayIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(texts[currentArrayIndex].slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (infinite && currentArrayIndex < texts.length - 1) {
      timeout = setTimeout(() => {
        setCurrentArrayIndex(currentArrayIndex + 1);
        setCurrentIndex(0);
        setCurrentText('');
      }, delay * 3);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentArrayIndex(0);
        setCurrentIndex(0);
        setCurrentText('');
      }, delay * 3);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentArrayIndex, text, delay, infinite]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;