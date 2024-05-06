import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap mx-6 py-3">
    <Link to="/" className="flex items-center flex-shrink-0 mr-6">
      <h1 className="font-semibold text-2xl tracking-tight">
        <i className="fa-solid fa-person-hiking text-indigo-600"></i> Shefat
        <span className="text-indigo-600">A</span>hmed
      </h1>
    </Link>
    <div className="block md:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded border-white hover:border-white"
        type="button"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.586 10L16.293 6.293C16.684 5.902 16.684 5.268 16.293 4.878C15.902 4.488 15.268 4.488 14.878 4.878L10 9.586L5.293 4.878C4.902 4.488 4.268 4.488 3.878 4.878C3.488 5.268 3.488 5.902 3.878 6.293L7.586 10L3.878 13.707C3.488 14.098 3.488 14.732 3.878 15.122C4.268 15.512 4.902 15.512 5.293 15.122L10 10.414L14.707 15.121C15.098 15.512 15.732 15.512 16.122 15.121C16.512 14.731 16.512 14.098 16.122 13.707L12.414 10L12.586 10Z"
            />
          </svg>
        ) : (
          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3C0 2.44772 0.447715 2 1 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4H1C0.447715 4 0 3.55228 0 3ZM0 10C0 9.44772 0.447715 9 1 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H1C0.447715 11 0 10.5523 0 10ZM0 17C0 16.4477 0.447715 16 1 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H1C0.447715 18 0 17.5523 0 17Z"
            />
          </svg>
        )}
      </button>
    </div>
    <div
      className={`w-full ${
        isOpen ? "block" : "hidden"
      } md:flex md:items-center md:w-auto`}
    >
      <div className="md:flex md:gap-8">
        <Link
          className="block link-style mt-4 md:inline-block md:mt-0 text-center"
          to="skills"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          className="block link-style mt-4 md:inline-block md:mt-0 text-center"
          to="all-projects"
          onClick={toggleMenu}
        >
         All Projects
        </Link>
        <Link
          className="block link-style mt-4 md:inline-block md:mt-0 text-center"
          to="about"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="block link-style mt-4 md:inline-block md:mt-0 text-center"
          to="blog"
          onClick={toggleMenu}
        >
          Blogs
        </Link>
        <Link
        className="block link-style mt-4 md:hidden text-center"
        to="contact"
      >
        Contact Us
      </Link>
      </div>
    </div>
    <div className="hidden md:flex">
      <Link
        className="btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
        to="contact"
      >
        Let's Talk
      </Link>
    </div>
  </nav>
  );
};

export default Navbar;
