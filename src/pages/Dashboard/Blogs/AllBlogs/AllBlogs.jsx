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
            className="btn text-2xl"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllBlogs;
