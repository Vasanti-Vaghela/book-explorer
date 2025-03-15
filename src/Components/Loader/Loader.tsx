import React from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div
      className="loader-container"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
