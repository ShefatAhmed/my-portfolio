import React, { useEffect, useState } from "react";
import AllSkill from "./AllSkill";

const AllSkills = () => {
  const [skills, addskills] = useState([]);

  useEffect(() => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/skills`)
      .then((res) => res.json())
      .then((data) => {
        addskills(data);
      });
  }, [skills]);

  const handleDelete = (id) => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/skill/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const currentskills = skills.filter((skill) => skill._id !== id);
          addskills(currentskills);
        }
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };
  return (
    <div className="my-16">
      <h1 className="text-center font-bold text-3xl">ALL Skills</h1>
      <div className="overflow-x-auto mx-8 my-16">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th>Skills Name</th>
              <th>Delete Skill</th>
            </tr>
          </thead>
          {skills.map((skill) => (
            <AllSkill
              key={skill._id}
              skill={skill}
              handleDelete={handleDelete}
            ></AllSkill>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllSkills;
