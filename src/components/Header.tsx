"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50 font-sans">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-extrabold text-2xl text-blue-600 tracking-tight">
            VD Suprema
          </div>
          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <a
                href="#inicio"
                className="text-black dark:text-white hover:text-blue-600 transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-black dark:text-white hover:text-blue-600 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-black dark:text-white hover:text-blue-600 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-black dark:text-white hover:text-blue-600 transition-colors"
              >
                Contato
              </a>
            </li>
            {/* <li>
              <ThemeToggle />
            </li> */}
          </ul>
          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white text-2xl"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-2 py-4">
              <li>
                <a
                  href="#inicio"
                  className="block py-2 px-4 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/historia"
                  className="block py-2 px-4 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="block py-2 px-4 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block py-2 px-4 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
