import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewBlog = () => {
  const blogsData = useLoaderData();
  const [blogData, setBlogData] = useState(blogsData);
  const { date, image, title, description, _id } = blogData;

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
  return (
    <div className="flex items-center justify-center p-10 shadow-lg m-5 rounded-3xl">
      <div className="w-full space-y-8">
        <div>
          <img className="w-36 mx-auto" src={image} alt="Blog Image" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">{date}</p>
          <p className="mt-2 text-center text-lg text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
