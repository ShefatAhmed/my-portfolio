import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-ten-delta.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="uppercase text-center font-extrabold text-2xl mt-5">
        Here are shown All Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">
                {project.description.length > 60
                  ? project.description.substring(0, 60) + "..."
                  : project.description}
                {project.description.length > 60 && (
                  <Link
                    to={`/project/${project._id}`}
                    className="text-indigo-400"
                  >
                    View Details
                  </Link>
                )}
              </p>
            </div>
            <div className="flex px-6 py-4 gap-5 items-center">
              <button className="text-3xl">
                <i className="fa-brands fa-github"></i>
              </button>
              <button className="glass hover:bg-indigo-800 px-5 py-1 rounded hover:text-white">
                Live Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
