import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextHighlightProps {
  text: string;
}

const TextHighlight: React.FC<TextHighlightProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lines = Array.from(textRef.current.children);

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { color: '#6b7280' },
          {
            color: '#ffffff',
            scrollTrigger: {
              trigger: line,
              start: 'top 75%',
              end: 'top 25%',
              scrub: true,
            },
          }
        );
      });
    }
  }, [text]);

  return (
    <div ref={textRef} className="text-white hover:text-gray-500 transition-colors duration-300">
      {text.split('\n').map((line, index) => (
        <div key={index} className="line">
          {line}
        </div>
      ))}
    </div>
  );
};

export default TextHighlight;
