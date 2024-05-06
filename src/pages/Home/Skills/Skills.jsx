import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills_section mt-8">
      <div className="skills_head">
        <h2>
          My <span className="text-red-500">Skills</span>
        </h2>
        <p>Here are my skills to represent my expertise</p>
      </div>
      <div className="skills_main gap-y-6 gap-x-10">
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>HTML</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="html h-full bg-red-500 rounded-md animate-html"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>CSS</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="css h-full bg-red-500 rounded-md animate-css"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Tailwind</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="tailwind h-full bg-red-500 rounded-md animate-tailwind"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Java Script</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="js h-full bg-red-500 rounded-md animate-js"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>React js</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="react h-full bg-red-500 rounded-md animate-react"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Node js</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="node h-full bg-red-500 rounded-md animate-node"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Express js</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="express h-full bg-red-500 rounded-md animate-express"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>MongoDB</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="mongo h-full bg-red-500 rounded-md animate-mongo"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>TypeScript</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="typescript h-full bg-red-500 rounded-md animate-mongo"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Mongoose</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="mongoose h-full bg-red-500 rounded-md animate-mongoose"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Redux</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="redux h-full bg-red-500 rounded-md animate-redux"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Next.js</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="next h-full bg-red-500 rounded-md animate-next"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Framer Motion</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="framer-motion h-full bg-red-500 rounded-md animate-framer-motion"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Tanstack Query</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="tanstack-query h-full bg-red-500 rounded-md animate-tanstack-query"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Authentication(firebase, nextauth)</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="authentication h-full bg-red-500 rounded-md animate-authentication"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Github</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="github h-full bg-red-500 rounded-md animate-github"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Bootstrap</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="bootstrap h-full bg-red-500 rounded-md animate-bootstrap"></span>
          </div>
        </div>
        <div className="skill_bar">
          <div className="info flex justify-between items-center px-2">
            <p>Shadcn UI</p>
          </div>
          <div className="bar h-2 bg-gray-300 rounded-md mt-1">
            <span className="shandcn h-full bg-red-500 rounded-md animate-shadcn"></span>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-3 text-center">
          <span className="font-bold ">Familiar with :</span> MaterialUI, Postgresql, Stripe and SSLCOMMERZ payment gateway, Agora, Axios etc.
        </p>
      </div>
    </div>
  );
};

export default Skills;
