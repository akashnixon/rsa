import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-44 flex flex-col justify-center items-center text-center">
      <div className="text-2xl font-bold mb-4">
        Welcome to the RSA Encryption App
      </div>
      <div className="text-2xl font-bold">
        Select an action from the navigation menu to get started.
      </div>
    </div>
  );
};

export default HomePage;