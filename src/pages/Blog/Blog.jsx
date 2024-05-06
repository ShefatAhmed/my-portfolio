import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-zeta.vercel.app/api/v1/blogs"
    )
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
            <img className="w-full" src={post.image} alt={post.title} />
            <div className="px-6 py-4">
              <p className="text-sm">{post.date}</p>
              <div className="flex justify-between items-center">
                <div className="font-bold text-xl mb-2">{post.title}</div>
              </div>
              <p className="text-gray-700 text-base">{post.description}</p>
            </div>
            <div className="px-6 py-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
