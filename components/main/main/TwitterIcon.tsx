// components/TwitterIcon.tsx
import React from 'react';

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M23 3.05v.002a10.5 10.5 0 0 1-2.977.817 4.987 4.987 0 0 0 2.193-2.742 10.5 10.5 0 0 1-3.324 1.27 5 5 0 0 0-8.536 4.567A14.097 14.097 0 0 1 1.7 2.933a5 5 0 0 0 1.54 6.693 4.966 4.966 0 0 1-2.258-.624v.063a5 5 0 0 0 4.002 4.905 4.993 4.993 0 0 1-2.252.085 5 5 0 0 0 4.66 3.47 9.994 9.994 0 0 1-6.177 2.129A8.924 8.924 0 0 0 7 19.954a14.13 14.13 0 0 0 8.994-3.104c.629.045 1.266.09 1.902.09 6.11 0 9.456-5.065 9.456-9.456l-.017-.43A6.752 6.752 0 0 0 23 3.05z"
      />
    </svg>
  );
};

export default TwitterIcon;
