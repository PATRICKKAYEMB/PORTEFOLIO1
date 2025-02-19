import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md z-50 fixed">
      <div className="flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-indigo-600">NoumiTech</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-indigo-600">Accueil</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">A propos</a>
          <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </div>

        {/* Bouton Menu Mobile */}
        <div
          className="md:hidden cursor-pointer z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-1 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-1 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-1 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 bg-slate-100 backdrop-blur-md h-screen z-20 flex flex-col items-center justify-center space-y-6 text-lg transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#home" className="text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Accueil</a>
        <a href="#about" className="text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>A propos</a>
        <a href="#services" className="text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" className="text-gray-700 hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
