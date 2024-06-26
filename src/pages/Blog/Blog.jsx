import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-ten-delta.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((post) => ({
          ...post,
          date: new Date(post.date).toISOString().split("T")[0],
        }));
        setBlogs(formattedData);
      });
  });

  return (
    <div>
      <h1 className="uppercase text-center font-extrabold text-2xl mt-5">
        Here is shown All Blogs
      </h1>
      <div className="flex flex-wrap justify-center">
        {blogs.map((post) => (
          <div
            key={post._id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <img className="w-96 h-96" src={post.image} alt={post.title} />
            <div className="px-6 py-4">
              <p className="text-sm">{post.date}</p>
              <div className="flex justify-between items-center">
                <div className="font-bold text-xl mb-2">{post.title}</div>
              </div>
              <p className="text-gray-700 text-base">
                {post.description.length > 567
                  ? post.description.substring(0, 567) + "..."
                  : post.description}
                {post.description.length > 567 && (
                  <Link to={`/blog/${post._id}`} className="text-indigo-400">
                    View Details
                  </Link>
                )}
              </p>
            </div>
            <div className="px-6 py-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
