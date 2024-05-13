import React, { useEffect, useState } from "react";
import AllProjects from "../AllProjects/AllProjects";
const AllProject = () => {
  const [projects, addProjects] = useState([]);

  useEffect(() => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/projects`)
      .then((res) => res.json())
      .then((data) => {
        addProjects(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/project/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const currentProjects = projects.filter((blog) => blog._id !== id);
          addProjects(currentProjects);
        }
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };
  return (
    <div className="my-16">
      <h1 className="text-center font-bold text-3xl">ALL Projects</h1>
      <div className="overflow-x-auto mx-8 my-16">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Image Link</th>
              <th>Description</th>
              <th>Technology</th>
              <th>Github Link</th>
              <th>Live Link</th>
              <th>Update Project</th>
              <th>Delete Project</th>
            </tr>
          </thead>
          {projects.map((project) => (
            <AllProjects
              key={project._id}
              project={project}
              handleDelete={handleDelete}
            ></AllProjects>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllProject;
