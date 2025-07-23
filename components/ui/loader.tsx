import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center  bg-transparent">
      <div className="w-12 h-12 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
