import React from "react";

const AllSkill = ({ skill, handleDelete }) => {
  const { _id, skill_name } = skill;
  return (
    <tbody className="text-center">
      <tr>
        <td>{skill_name}</td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn text-2xl">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllSkill;
