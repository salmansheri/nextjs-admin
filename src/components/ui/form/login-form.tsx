import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-background-soft p-6 rounded-md shadow">
      <h1 className="text-3xl">Login</h1>
      <form className="flex flex-col space-y-8 mt-5">
        <input
          className="bg-transparent p-2 rounded-md border"
          placeholder="Enter Email "
          name="email"
        />
        <input
          className="bg-transparent p-2 border rounded-md"
          placeholder="Enter password "
          name="password"
        />
        <button
          type="submit"
          className="bg-violet-500 p-2 rounded-md shadow  hover:bg-violet-500/90 transition-all ease-linear duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
