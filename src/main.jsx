import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Skills from "./pages/Home/Skills/Skills";
import About from "./pages/Home/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import AllProject from "./pages/AllProject/AllProject";
import Dashboard from "./Layout/Dashboard";
import Blogs from "./pages/Dashboard/Blogs/Blogs";
import Projects from "./pages/Dashboard/Projects/Projects";
import UpdateBlog from "./pages/Dashboard/Blogs/UpdateBlog/UpdateBlog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "all-projects",
        element: <AllProject />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <div>THis is dashboard</div>,
      },
      {
        path: "/dashboard/blogs",
        element: <Blogs />,
      },
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
      {
        path: "/dashboard/blog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`https://portfolio-server-ten-delta.vercel.app/blog/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
