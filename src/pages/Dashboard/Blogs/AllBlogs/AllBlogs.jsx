import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = ({ blog, handleDelete }) => {
  const { _id, image, title, description } = blog;
  const isLongDescription = description.split(" ").length > 5;
  const truncateDescription = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    } else {
      return text;
    }
  };
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{image}</td>
        <td>
          {isLongDescription
            ? truncateDescription(description, 5)
            : description}
        </td>
        <td>
          <Link
            to={`/dashboard/blog/${_id}`}
            className="btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Update Blog
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle bg-red-400 glass hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllBlogs;
