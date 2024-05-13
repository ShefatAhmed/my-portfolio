import React from "react";

const AddProject = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.img.value;
    const title = form.title.value;
    const description = form.description.value;
    const technology = form.technology.value;
    const gitLink = form.gitLink.value;
    const liveLink = form.liveLink.value;
    const newProject = {
      title,
      image,
      description,
      technology,
      gitLink,
      liveLink,
    };
    try {
      const response = await fetch(
        "https://portfolio-server-ten-delta.vercel.app/project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add Project.");
      }
      const data = await response.json();
      if (data.insertedId) {
        alert("Project has been successfully added");
        form.reset();
      } else {
        throw new Error("Failed to add Project.");
      }
    } catch (error) {
      console.error("Error adding Project:", error);
      alert("Failed to add Project. Please try again later.");
    }
  };
  return (
    <div className="pb-10 sm:pb-20 md:pb-40 lg:pb-60 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-center font-bold text-3xl my-8">Add A Project</h1>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="img"
          >
            Project Image URL
          </label>
          <input
            type="text"
            id="img"
            name="img"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="technology"
          >
            Technology
          </label>
          <input
            type="text"
            id="technology"
            name="technology"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a technology"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="title"
          >
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="gitLink"
          >
            Git Repository Link
          </label>
          <input
            type="text"
            id="gitLink"
            name="gitLink"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Git Repository Link"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="liveLink"
          >
            Live Project Link
          </label>
          <input
            type="text"
            id="liveLink"
            name="liveLink"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Live Project Link"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-xs font-bold text-gray-700"
            htmlFor="description"
          >
            Project Description
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            id="description"
            name="description"
            rows="4"
            placeholder="Enter Description"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full py-3 btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
