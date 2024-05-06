import React, { useEffect, useState } from "react";
import "./Banner.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Banner = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Web Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Student",
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const isComplete = currentIndex === currentText.length;

    if (!isComplete) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + currentText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearInterval(intervalId);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }
  }, [currentIndex, currentTextIndex]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleResumeDownload = () => {
    const resumePdfUrl =
      "https://drive.google.com/uc?id=1_h8fcUbbRYxVwJUGaiLHJNiaguSGPFyV";
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <div className="py-8 px-4" data-aos="zoom-in">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <img
          className="h-56 md:h-96 object-cover border-white mr-10 rounded bg-indigo-100 py-1 px-1"
          src="https://i.postimg.cc/kX9xTrwP/IMG-20240408-132456-583-copy.jpg"
          alt=""
        />
        <div className="flex flex-col text-left md:mx-8">
          <h2 className="font-bold text-gray-400">Hello there...</h2>
          <h1 className="text-4xl">Md Shefat Ahmed.</h1>
          <h3 className="font-bold text-sm text-gray-400">
            I am a <span className="text-indigo-400">{displayText}</span>
          </h3>
          <button
            className="btn hover:bg-indigo-800 glass bg-indigo-600 text-white mt-4 w-1/2"
            onClick={handleResumeDownload}
          >
            <i className="fa-solid fa-download"></i> Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
