import React, { useEffect, useState } from "react";

const AllProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("https://l2-b2-frontend-path-assignment-6-server-starter-pack-zeta.vercel.app/api/v1/project")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    }, []);
  return (
    <div>
      <h1 className="uppercase text-center font-extrabold text-2xl mt-5">
        Here are shown All Projects
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {project.technology}
              </span>
            </div>
            <div className="px-6 py-4">
              <a
                href={project.gitLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
