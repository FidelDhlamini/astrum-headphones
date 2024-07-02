// components/FacebookIcon.tsx
import React from 'react';

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M17.5 2h-11A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h5.836c.313 0 .61-.124.832-.344l3.832-3.832c.22-.221.344-.519.344-.832V4.5A2.5 2.5 0 0 0 17.5 2z"
      />
    </svg>
  );
};

export default FacebookIcon;
