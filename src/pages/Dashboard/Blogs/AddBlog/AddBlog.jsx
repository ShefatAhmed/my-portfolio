import React from "react";

const AddBlog = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.img.value;
    const title = form.title.value;
    const description = form.description.value;
    const newBlog = {
      image,
      title,
      description,
    };

    try {
      const response = await fetch(
        "https://portfolio-server-ten-delta.vercel.app/blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add blog.");
      }

      const data = await response.json();
      if (data.insertedId) {
        alert("Blog has been successfully added");
        form.reset();
      } else {
        throw new Error("Failed to add blog.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Please try again later.");
    }
  };
  return (
    <div class="pb-10 sm:pb-20 md:pb-40 lg:pb-60 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        class="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h1 class="text-center font-bold text-3xl my-8">Add A Blog</h1>
        <div class="mb-4">
          <label class="block text-xs font-bold text-gray-700" for="img">
            Blog Image URL
          </label>
          <input
            type="text"
            id="img"
            name="img"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Image URL"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-xs font-bold text-gray-700" for="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-xs font-bold text-gray-700"
            for="description"
          >
            Blog Description
          </label>
          <textarea
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            id="description"
            name="description"
            rows="4"
            placeholder="Enter Description"
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="w-full py-3 btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
