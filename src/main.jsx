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
import AuthProvider from "./providers/AuthProvider";
import PrivateRoutes from "./pages/Dashboard/PrivateRoutes/PrivateRoutes";
import Login from "./Login/Login";
import UpdateProject from "./pages/Dashboard/Projects/UpdateProject/UpdateProject";
import SetSkills from "./pages/Dashboard/SetSkills/SetSkills";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ViewProject from "./pages/ViewProject/ViewProject";
import ViewBlog from "./pages/ViewBlog/ViewBlog";
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
      {
        path: "project/:id",
        element: <ViewProject />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-ten-delta.vercel.app/project/${params.id}`
          ),
      },
      {
        path: "blog/:id",
        element: <ViewBlog />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-ten-delta.vercel.app/blog/${params.id}`
          ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
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
        path: "/dashboard/set-skills",
        element: <SetSkills />,
      },
      {
        path: "/dashboard/blog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-ten-delta.vercel.app/blog/${params.id}`
          ),
      },
      {
        path: "/dashboard/project/:id",
        element: <UpdateProject />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-ten-delta.vercel.app/project/${params.id}`
          ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
