// components/InstagramIcon.tsx
import React from 'react';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 3H10a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-1 10h2M12 8v4M7.5 16.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      />
    </svg>
  );
};

export default InstagramIcon;
