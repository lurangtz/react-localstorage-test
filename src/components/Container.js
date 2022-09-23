import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">{children}</div>
      </div>
    </div>
  );
};

export default Container;
