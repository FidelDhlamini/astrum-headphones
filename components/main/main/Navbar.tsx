"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href={href}
      onClick={onClick}
      className="text-lg block transition-colors duration-300 hover:text-red-300"
    >
      {label}
    </motion.a>
  );
};

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-gray-20 text-white px-6 py-4 shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex items-center justify-between">
      <img
              src="/astrum-logo.png"
              alt="Company Logo"
              className="h-30 w-40"
            />
        <div className="text-2xl font-bold">Audioware</div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#home" label="Home" />
          <NavLink href="#products" label="Products" />
          <NavLink href="#about" label="About" />
          <NavLink href="#contact" label="Contact" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 space-y-4"
        >
          <NavLink href="#home" label="Home" onClick={toggleMenu} />
          <NavLink href="#products" label="Products" onClick={toggleMenu} />
          <NavLink href="#about" label="About" onClick={toggleMenu} />
          <NavLink href="#contact" label="Contact" onClick={toggleMenu} />
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
