import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#5a51d6]">
      

      {/* Login Box */}
      <div className="bg-gray-100 shadow-xl rounded-lg p-8 h-[30rem] w-96 border border-gray-200">
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://cdn.brandfetch.io/id2tyrVG5V/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" // Replace with your actual logo path
          alt="College Logo"
          className="w-20 h-20 mb-6"
        />
        <h1 className="text-3xl mb-4 font-bold text-gray-800">College ERP</h1>
        <hr className="border-t-2 border-blue-500 w-80 mt-2 rounded-full" />
      </div>
        <h2 className="text-xl font-semibold text-center mb-6">Select User Type</h2>

        <div className="flex flex-col space-y-4">
          <Link
            to="/login/adminlogin"
            className="w-full px-4 py-2 bg-indigo-500 text-white text-center rounded-md hover:bg-indigo-600 transition"
          >
            Admin Login
          </Link>
          <Link
            to="/login/facultylogin"
            className="w-full px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 transition"
          >
            Faculty Login
          </Link>
          <Link
            to="/login/studentlogin"
            className="w-full px-4 py-2 bg-purple-500 text-white text-center rounded-md hover:bg-purple-600 transition"
          >
            Student Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
