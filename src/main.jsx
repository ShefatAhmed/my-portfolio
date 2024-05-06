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
    path: "*",
    element: <div>Error</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
