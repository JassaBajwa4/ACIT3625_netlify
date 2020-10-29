import React from "react";

const Error = () => {
  return (
    <div style={errorStyle}>
      <h1>
        Oops! Page not found...
      
      </h1>
    </div>
  );
};

const errorStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export default Error;
