// src/components/nav/MobileNav.tsx
import React, { useState } from "react";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header móvil */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-900">GanaHoy</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12" // Icono de "Cerrar"
                  : "M4 6h16M4 12h16m-7 6h7" // Icono de "Menú"
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú lateral */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white text-gray-700 p-6 z-50 shadow-lg"
          aria-hidden={!menuOpen}
        >
          <nav className="space-y-6 text-lg">
            <a href="#" className="block hover:text-blue-900">
              Inicio
            </a>
            <a href="#" className="block hover:text-blue-900">
              Servicios
            </a>
            <a href="#" className="block hover:text-blue-900">
              Planes
            </a>
            <a href="#" className="block hover:text-blue-900">
              Contáctanos
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-blue-900"
            aria-label="Close Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNav;
