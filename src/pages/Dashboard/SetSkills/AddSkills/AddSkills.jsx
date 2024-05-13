import React, { useState } from "react";

const AddSkills = () => {
  const [skillName, setSkillName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newSkill = {
      skill_name: skillName,
    };

    try {
      const response = await fetch(
        "https://portfolio-server-ten-delta.vercel.app/skill",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSkill),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add skill.");
      }

      const data = await response.json();
      if (data.insertedId) {
        alert("Skill has been successfully added");
        setSkillName("");
      } else {
        throw new Error("Failed to add skill.");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. Please try again later.");
    }
  };

  return (
    <div className="pb-10 sm:pb-20 md:pb-40 lg:pb-60 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-center font-bold text-3xl my-8">Add New Skill</h1>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="skillName"
          >
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            name="skill_name"
            value={skillName}
            onChange={(event) => setSkillName(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Skill Name"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full py-3 btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Add Skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkills;
