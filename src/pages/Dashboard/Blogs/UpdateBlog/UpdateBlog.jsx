import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateBlog = () => {
  const initialBlogData = useLoaderData();
  const [blogData, setBlogData] = useState(initialBlogData);
  const { image, title, description, _id } = blogData;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://portfolio-server-ten-delta.vercel.app/blog/${_id}`
        );
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlogData();
  }, [_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.description.value;
    const image = form.image.value;
    const title = form.title.value;
    const updateBlog = { description, image, title };

    fetch(`https://portfolio-server-ten-delta.vercel.app/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Blog update sucessfully!")
        }
      });

    event.target.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:max-w-2xl py-5 px-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-full md:max-w-2xl p-5 mx-auto"
        >
          <h1 className="text-center font-bold text-3xl my-8">
            Update This Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
            <div>
              <label className="block text-xs font-bold text-gray-800">
                Image
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
            <div className="md:col-span-2">
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
          </div>
          <button
            type="submit"
            className="w-full mt-5 py-3 btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
