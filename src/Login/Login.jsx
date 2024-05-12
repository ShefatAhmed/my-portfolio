import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const userLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        switch (error.code) {
          case "auth/invalid-email":
            setErrorMessage("Please provide a valid email address.");
            break;
          default:
            setErrorMessage("Please provide valid email and password.");
            break;
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-24">
        <div className="w-full max-w-md py-16 px-6 rounded-lg shadow-md">
          <h2 className="mb-4 text-center text-xl font-extrabold italic">
            LOGIN NOW !!
          </h2>
          <form onSubmit={userLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
            >
              Sign In
            </button>
          </form>
          {errorMessage && (
            <p className="mt-3 text-red-500 text-center">
              <i className="fa-solid fa-triangle-exclamation"></i>
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
