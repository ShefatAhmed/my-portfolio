import React, { useEffect, useState } from "react";
import AllBlogs from "./AllBlogs";

const AllBlog = () => {
  const [blogs, addblogs] = useState([]);

  useEffect(() => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/blogs`)
      .then((res) => res.json())
      .then((data) => {
        addblogs(data);
      });
  }, [blogs]);

  const handleDelete = (id) => {
    fetch(`https://portfolio-server-ten-delta.vercel.app/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const currentblogs = blogs.filter((blog) => blog._id !== id);
          addblogs(currentblogs);
        }
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div className="my-16">
      <h1 className="text-center font-bold text-3xl">ALL Blogs</h1>
      <div className="overflow-x-auto mx-8 my-16">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Image Link</th>
              <th>Description</th>
              <th>Update Blog</th>
              <th>Delete Blog</th>
            </tr>
          </thead>
          {blogs.map((blog) => (
            <AllBlogs
              key={blog._id}
              blog={blog}
              handleDelete={handleDelete}
            ></AllBlogs>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBlog;
