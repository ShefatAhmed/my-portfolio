import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://i.postimg.cc/Qxcw9Wxk/IMG-20240408-132442-484-849369605-copy.jpg"
              alt="About Us"
              className="mx-auto h-auto  rounded-lg drop-shadow-2xl"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <h1 className="title">
              About <span className="text-indigo-400">Us </span>
            </h1>
            <p className="text-gray-700 mb-4">
              Hi, I'm Shefat Ahmed, currently pursuing a BBA degree from
              National University Bangladesh. I have a passion for MERN stack
              development and I am proficient in JavaScript. I enjoy creating
              web applications and exploring new technologies to enhance my
              skills. Based in Bangladesh, I am dedicated to delivering
              high-quality and innovative solutions to meet the needs of clients
              and users.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout my educational journey, I have gained a solid
              understanding of business administration principles and practices.
              This knowledge, combined with my technical skills in MERN stack
              development, allows me to approach projects with a well-rounded
              perspective. I am committed to continuous learning and staying
              updated with the latest trends and advancements in the field of
              web development.
            </p>
            <div className="flex justify-start gap-5 text-3xl">
              <Link to="https://www.linkedin.com/in/shefatahmed/" className="text-blue-700">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="https://github.com/ShefatAhmed">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link to="https://www.facebook.com/shefat01/" className="text-blue-700">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
            <div className="mt-5">
              <p className="flex gap-2 items-center">
                <i className="fas fa-envelope"></i>  shefata@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <i className="fas fa-phone-alt"></i> +8801787582284
              </p>
              <p className="flex gap-2 items-center">
                <i className="fas fa-phone-alt"></i> +8801330112605
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
