import React from "react";
import { Link } from "react-router-dom";

const AllProjects = ({ project, handleDelete }) => {
  const { _id, title, image, description, technology, gitLink, liveLink } =
    project;
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{image}</td>
        <td>{description}</td>
        <td>{technology}</td>
        <td>{gitLink}</td>
        <td>{liveLink}</td>
        <td>
          <Link
            to={`/dashboard/project/${_id}`}
            className="btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Update Project
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn text-2xl">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllProjects;
