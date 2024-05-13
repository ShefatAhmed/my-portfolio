import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProject = () => {
  const initialProjectData = useLoaderData();
  const [projectData, setProjectData] = useState(initialProjectData);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedDescription = form.description.value;
    const updatedImage = form.image.value;
    const updatedTitle = form.title.value;
    const updatedTechnology = form.technology.value;
    const updatedGitLink = form.gitLink.value;
    const updatedLiveLink = form.liveLink.value;
    const updateProject = {
      title: updatedTitle,
      image: updatedImage,
      description: updatedDescription,
      technology: updatedTechnology,
      gitLink: updatedGitLink,
      liveLink: updatedLiveLink,
    };

    fetch(`https://portfolio-server-ten-delta.vercel.app/project/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Project updated successfully!");
          setProjectData(updateProject);
        }
      });
    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:max-w-2xl py-5 px-8 shadow-md rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="max-w-full md:max-w-2xl p-5 mx-auto"
        >
          <h1 className="text-center font-bold text-3xl my-8">
            Update Project
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
            <div>
              <label className="block text-xs font-bold text-gray-800">
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800">
                Technology
              </label>
              <input
                type="text"
                name="technology"
                defaultValue={technology}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800">
                GitHub Link
              </label>
              <input
                type="text"
                name="gitLink"
                defaultValue={gitLink}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800">
                Live Link
              </label>
              <input
                type="text"
                name="liveLink"
                defaultValue={liveLink}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 mt-5">
              <label className="block text-xs font-bold text-gray-800">
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                defaultValue={description}
                name="description"
                rows="4"
                required
              ></textarea>
            </div>
          <button
            type="submit"
            className="w-full mt-5 py-3 btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
