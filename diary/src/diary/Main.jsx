import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/pic");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          marginTop: 0,
          position: "absolute",
          top: 30,
          cursor: "pointer",
        }}
        onClick={handleTitleClick}
      >
        My Diary
      </h1>
    </div>
  );
}

export default Main;
