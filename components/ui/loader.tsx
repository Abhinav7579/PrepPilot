
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-blue-900">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
