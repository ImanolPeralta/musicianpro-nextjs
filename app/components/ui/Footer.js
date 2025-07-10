import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MonteCarlo } from "next/font/google";

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
    "Bajos eléctricos",
    "Pianos Digitales",
    "Theremines",
    "Controladores MIDI",
  ],
};

const redes = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://youtube.com/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#3E2723] text-[#F5EFE6] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Logo + redes */}
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <div className="flex items-center mb-5">
            <Icon
              icon="simple-icons:musicbrainz"
              className="text-4xl mr-3 cursor-pointer"
            />
            <span
              className={`${montecarlo.className} text-3xl font-bold select-none cursor-pointer`}
            >
              MusicianPro
            </span>
          </div>
          <p className="mb-6 text-center md:text-left max-w-xs leading-relaxed">
            Tu tienda online de instrumentos musicales con las mejores
            categorías y productos.
          </p>
          <div className="flex space-x-6 text-xl text-[#F5EFE6]">
            {redes.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-[#8B2C2C] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Categorías con subcategorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4">
          {Object.entries(categories).map(([cat, subs]) => (
            <div key={cat}>
              <h3 className="font-semibold text-lg mb-4">{cat}</h3>
              {/* Si querés que el título también sea clickeable:
              <Link
                href={`/${cat.toLowerCase()}`}
                className="font-semibold text-lg mb-4 block hover:text-[#8B2C2C]"
              >
                {cat}
              </Link>
              */}
              <ul className="space-y-2 text-sm">
                {subs.map((sub) => (
                  <li key={sub}>
                    <Link
                      href={`/${cat.toLowerCase()}/${sub
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-[#8B2C2C] transition-colors block"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-12 border-t border-[#8B2C2C]/50 pt-6 text-center text-sm select-none">
        © 2025 MusicianPro. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
