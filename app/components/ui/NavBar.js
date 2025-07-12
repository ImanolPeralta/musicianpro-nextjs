"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX, HiShoppingCart, HiUser } from "react-icons/hi";
import { MonteCarlo } from "next/font/google";
import { Mulish } from "next/font/google";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-auth";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

const montecarlo = MonteCarlo({
  weight: "400",
  subsets: ["latin"],
});

const categories = {
  Cordofonos: [
    "Guitarras Criollas",
    "Guitarras Electricas",
    "Violines",
    "Arpas",
    "Bajos",
  ],
  Aerofonos: ["Saxofones", "Flautas", "Clarinetes", "Trompetas", "Armonicas"],
  Percusion: ["Baterias", "Tambores", "Cajones"],
  Electrofonos: [
    "Sintetizadores",
    "Teclados",
    "Bajos electricos",
    "Pianos Digitales",
    "Theremines",
    "Controladores MIDI",
  ],
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
  const { user } = useAuth();

  const colors = {
    navbarFooter: "#3E2723",
    textNavFooter: "#F5EFE6",
    btnPrimary: "#8B2C2C",
    primaryBg: "#F5EFE6",
    cardBg: "#E8DCCB",
    cardShadow: "#B0AFAF",
    hoverBtn: "#641B1B",
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (cat) => {
    setOpenDropdown(openDropdown === cat ? null : cat);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: colors.navbarFooter,
          color: colors.textNavFooter,
        }}
        className={`shadow-md fixed w-full z-60 ${mulish.className}`}
      >
        {/* Top bar (siempre visible) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            style={{ color: colors.textNavFooter }}
            className={`flex items-center space-x-2 text-3xl font-bold select-none ${montecarlo.className}`}
            onClick={closeMenu}
          >
            <Icon icon="simple-icons:musicbrainz" className="text-3xl" />
            <span>MusicianPro</span>
          </Link>

          {/* Menú Desktop */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                href="/"
                style={{ color: colors.textNavFooter }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.btnPrimary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textNavFooter)
                }
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>

            {Object.entries(categories).map(([cat, subcats]) => (
              <li key={cat} className="relative group">
                <button
                  style={{ color: colors.textNavFooter }}
                  className="flex items-center space-x-1 cursor-pointer transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.btnPrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.textNavFooter)
                  }
                  aria-haspopup="true"
                >
                  <span>{cat}</span>
                </button>
                <ul
                  style={{
                    backgroundColor: colors.navbarFooter,
                    borderColor: colors.btnPrimary,
                    transition: "all 0.3s",
                    minWidth: "180px",
                    zIndex: 9999,
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-5 border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible text-center"
                  role="menu"
                >
                  {subcats.map((sub) => (
                    <li key={sub} role="none">
                      <Link
                        href={`/${cat.toLowerCase()}/${sub
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        style={{ color: colors.textNavFooter }}
                        className="block px-4 py-2 cursor-pointer transition-colors duration-200"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            colors.btnPrimary;
                          e.currentTarget.style.color = colors.primaryBg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.textNavFooter;
                        }}
                        role="menuitem"
                        onClick={closeMenu}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Íconos Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <button
                aria-label="Carrito"
                style={{ color: colors.textNavFooter }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.btnPrimary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textNavFooter)
                }
              >
                <HiShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm">{user.email}</span>
                <button
                  onClick={async () => await signOut(auth)}
                  className="text-sm px-2 py-1 bg-[#8B2C2C] text-[#F5EFE6] rounded hover:bg-[#641B1B] transition cursor-pointer"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button
                  aria-label="Usuario"
                  style={{ color: colors.textNavFooter }}
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.btnPrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.textNavFooter)
                  }
                >
                  <HiUser size={24} />
                </button>
              </Link>
            )}
          </div>

          {/* Botón Hamburguesa */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: colors.textNavFooter }}
              className="cursor-pointer transition-colors duration-200"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.btnPrimary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textNavFooter)
              }
            >
              {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fondo oscuro al abrir menú móvil */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-md z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menú lateral móvil */}
      <div
        style={{
          backgroundColor: colors.navbarFooter,
          color: colors.textNavFooter,
        }}
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-4/5 max-w-xs shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Línea divisoria debajo del título */}
        <div
          style={{
            borderTop: `1px solid ${colors.textNavFooter}`,
            opacity: 0.3,
          }}
          className="w-full mb-2"
        ></div>

        <ul className="flex flex-col p-4 space-y-3 overflow-y-auto h-full">
          <li>
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-2 rounded cursor-pointer hover:bg-[#8B2C2C] hover:text-[#F5EFE6] transition-colors"
            >
              Inicio
            </Link>
          </li>

          {Object.entries(categories).map(([cat, subcats]) => (
            <li key={cat}>
              <button
                onClick={() => toggleDropdown(cat)}
                className="w-full text-left px-3 py-2 rounded flex justify-between items-center cursor-pointer hover:bg-[#8B2C2C] hover:text-[#F5EFE6] transition-colors"
                aria-expanded={openDropdown === cat}
                aria-controls={`${cat}-submenu`}
              >
                <span>{cat}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    openDropdown === cat ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === cat && (
                <ul
                  id={`${cat}-submenu`}
                  className="pl-5 mt-1 space-y-1 border-l border-[#A67B5B] ml-2"
                  role="menu"
                  aria-label={`${cat} submenu`}
                >
                  {subcats.map((sub) => (
                    <li key={sub} role="none">
                      <Link
                        href={`/${cat.toLowerCase()}/${sub
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={closeMenu}
                        className="block px-3 py-1.5 text-sm font-medium text-[#EADAC8] hover:bg-[#70412C] hover:text-[#F5EFE6] rounded transition-all duration-200"
                        role="menuitem"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Íconos móviles */}
          <li className="flex space-x-6 mt-4 px-3">
            <Link href="/cart" className="relative">
              <button
                aria-label="Carrito"
                style={{ color: colors.textNavFooter }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.btnPrimary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textNavFooter)
                }
              >
                <HiShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            <Link href="/login">
              <button
                aria-label="Usuario"
                style={{ color: colors.textNavFooter }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.btnPrimary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textNavFooter)
                }
              >
                <HiUser size={24} />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
