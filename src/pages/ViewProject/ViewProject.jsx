import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewProject = () => {
  const projectsData = useLoaderData();
  const [projectData, setProjectData] = useState(projectsData);
  const { _id, title, image, description, technology, gitLink, liveLink } =
    projectData;

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `https://portfolio-server-ten-delta.vercel.app/project/${_id}`
        );
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchProjectData();
  }, [_id]);
  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto bg-white overflow-hidden">
        <img
          className="w-96 mx-auto border p-2"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="p-6 border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {projectData.title}
          </h2>
          <p className="text-gray-700 text-base mb-4">
            {projectData.description}
          </p>
          <div className="flex mb-4">
            <h1>Technology: {projectData.technology}</h1>
          </div>
          <div>
            <p>Github Link: {projectData.gitLink}</p>
            <p>Website Link: {projectData.liveLink}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
