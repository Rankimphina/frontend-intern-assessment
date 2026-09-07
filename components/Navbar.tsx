"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "About", hasDropdown: true },
  { label: "What We Do", hasDropdown: true },
  { label: "Jobs", hasDropdown: true },
  { label: "Projects" },
  { label: "TG Academy" },
  { label: "Strategic Partnership" },
  { label: "Pricing" },
  { label: "Book a Consultation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">

        {/* Top Row: Logo + Account + Assessment */}
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={120}
              height={45}
              className="h-auto w-[105px] md:w-[120px]"
              priority
            />
          </a>

          {/* Account + Assessment */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm bg-[#5a0b45] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#430834] focus:outline-none focus:ring-2 focus:ring-[#5a0b45] focus:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-[9px]"
              >
                ♙
              </span>
              Account
              <span aria-hidden="true" className="text-[8px]">
                ▾
              </span>
            </button>

            <a
              href="#assessment"
              className="rounded-sm bg-[#ee4266] px-5 py-2 text-xs font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ee4266] focus:ring-offset-2"
            >
              Take Assessment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b0f4f] lg:hidden"
          >
            <span className="text-2xl leading-none">
              {isMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Second Row: Navigation Links */}
        <div className="hidden items-center justify-center gap-5 border-t border-gray-100 py-3 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">

              {link.hasDropdown ? (
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    )
                  }
                  className="flex items-center gap-1 whitespace-nowrap text-[11px] font-medium text-gray-700 transition-colors hover:text-[#6b0f4f] focus:outline-none focus:ring-2 focus:ring-[#6b0f4f] focus:ring-offset-2"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <span className="text-[9px]">⌄</span>
                </button>
              ) : (
                <a
                  href="#"
                  className="flex items-center whitespace-nowrap text-[11px] font-medium text-gray-700 transition-colors hover:text-[#6b0f4f] focus:outline-none focus:ring-2 focus:ring-[#6b0f4f] focus:ring-offset-2"
                >
                  {link.label}
                </a>
              )}

              {/* Dropdown */}
              {link.hasDropdown && openDropdown === link.label && (
                <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">

                  {link.label === "About" && (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        About Us
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Our Team
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Our Story
                      </a>
                    </>
                  )}

                  {link.label === "What We Do" && (
                    <>
                      <a
                        href="#management-development"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Management Development
                      </a>

                      <a
                        href="#transformation-hub"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Transformation Hub
                      </a>

                      <a
                        href="#training-development"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Training and Development
                      </a>

                      <a
                        href="#talent-recruitment"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Talent Recruitment
                      </a>
                    </>
                  )}

                  {link.label === "Jobs" && (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Job Opportunities
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[10px] text-gray-700 hover:bg-[#f8e7ec] hover:text-[#6b0f4f]"
                      >
                        Internships
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-4 shadow-md lg:hidden">
          <div className="flex flex-col">

            {navLinks.map((link) => (
              <div key={link.label}>

                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-[#6b0f4f] focus:outline-none"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <span className="text-xs">
                        {openDropdown === link.label ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {openDropdown === link.label && (
                      <div className="bg-gray-50 px-4 py-2">

                        {link.label === "About" && (
                          <>
                            <a href="#" className="block py-2 text-xs text-gray-600">
                              About Us
                            </a>
                            <a href="#" className="block py-2 text-xs text-gray-600">
                              Our Team
                            </a>
                            <a href="#" className="block py-2 text-xs text-gray-600">
                              Our Story
                            </a>
                          </>
                        )}

                        {link.label === "What We Do" && (
                          <>
                            <a
                              href="#management-development"
                              className="block py-2 text-xs text-gray-600"
                            >
                              Management Development
                            </a>
                            <a
                              href="#transformation-hub"
                              className="block py-2 text-xs text-gray-600"
                            >
                              Transformation Hub
                            </a>
                            <a
                              href="#training-development"
                              className="block py-2 text-xs text-gray-600"
                            >
                              Training and Development
                            </a>
                            <a
                              href="#talent-recruitment"
                              className="block py-2 text-xs text-gray-600"
                            >
                              Talent Recruitment
                            </a>
                          </>
                        )}

                        {link.label === "Jobs" && (
                          <>
                            <a href="#" className="block py-2 text-xs text-gray-600">
                              Job Opportunities
                            </a>
                            <a href="#" className="block py-2 text-xs text-gray-600">
                              Internships
                            </a>
                          </>
                        )}

                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between border-b border-gray-100 py-3 text-sm font-medium text-gray-700 hover:text-[#6b0f4f] focus:outline-none"
                  >
                    {link.label}
                  </a>
                )}

              </div>
            ))}

            {/* Mobile Actions */}
            <div className="mt-5 flex flex-col gap-3">

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#5a0b45] px-4 py-3 text-sm font-medium text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs">
                  ♙
                </span>
                Account
                <span className="text-xs">⌄</span>
              </button>

              <a
                href="#assessment"
                className="w-full rounded-md bg-[#ed3b68] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Take Assessment
              </a>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}