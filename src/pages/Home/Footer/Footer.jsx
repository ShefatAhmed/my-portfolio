import { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const personName = "Md Shefat Ahmed";
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <Link
            className="font-semibold text-2xl tracking-tight link-style"
          >
            <i className="fa-solid fa-person-hiking text-indigo-600"></i> Shefat
            <span className="text-indigo-600">A</span>hmed
          </Link>
        </div>
        <p className="text-sm">
          © {currentYear} <span className="text-indigo-400">{personName}</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
