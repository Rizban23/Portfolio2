'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Rizban Saitazim kyzy</h1>

       
        <nav className="space-x-6 hidden md:flex">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#skills" className="hover:underline">Skills</Link>
          <Link href="#portfolio" className="hover:underline">Portfolio</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>

        
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-4 flex flex-col bg-blue-700">
          <Link href="#about" className="hover:underline" onClick={closeMenu}>About</Link>
          <Link href="#skills" className="hover:underline" onClick={closeMenu}>Skills</Link>
          <Link href="#portfolio" className="hover:underline" onClick={closeMenu}>Portfolio</Link>
          <Link href="#contact" className="hover:underline" onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
