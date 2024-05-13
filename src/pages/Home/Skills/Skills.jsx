import React, { useEffect, useState } from "react";
const Skills = () => {
  const [skills, addSkills] = useState([]);

  useEffect(() => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/skills`)
      .then((res) => res.json())
      .then((data) => {
        addSkills(data);
      });
  }, [skills]);
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="title text-center">
            <span className="text-indigo-400">My</span> Skills
          </h1>
          <p className="text-lg text-gray-600">
            Here are my skills to represent my level
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="mt-2">
                <p className="text-lg font-semibold text-gray-900">
                  {skill.skill_name}
                </p>
                <div className="bg-gray-300 h-2 rounded-full">
                  <div
                    className={`bg-indigo-400 h-full rounded-full ${
                      skill.level === "beginner"
                        ? "w-1/4"
                        : skill.level === "intermediate"
                        ? "w-1/2"
                        : skill.level === "advanced"
                        ? "w-3/4"
                        : skill.level === "super_advanced"
                        ? "w-full"
                        : "w-full"
                    }
                    `}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-base text-gray-600">
            <span className="font-bold ">Familiar with :</span> MaterialUI,
            Postgresql, Stripe and SSLCOMMERZ payment gateway, Agora, Axios etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
