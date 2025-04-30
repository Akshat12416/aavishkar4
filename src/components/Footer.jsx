import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import h2slogo from '../assets/h2slogo.png'

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 px-4 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-2xl font-bold flex flex-col items-start">
          Platform Partner:
          <img className="h-10 mt-4" src={h2slogo} alt="Hack2Skill" />
        </div>
        {/* About Section */}
        <div className="max-w-md">
          <h2 className="text-xl font-semibold mb-2">About ISTE ABESIT</h2>
          <p className="text-sm text-gray-300">
            ISTE ABESIT Student Chapter is a technical club that fosters innovation, collaboration, and learning among engineering students by organizing events, workshops, and hackathons like AAVISHKAR.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with us</h2>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/iste_abesit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/iste-abesit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ISTE ABESIT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
