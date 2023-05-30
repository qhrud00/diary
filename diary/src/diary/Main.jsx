import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTitleClick = () => {
    navigate("/pic");
  };

  const editedImage = location.state?.editedImage;

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
          cursor: "pointer",
        }}
        onClick={handleTitleClick}
      >
        My Diary
      </h1>

      {/* 업로드된 이미지를 표시 */}
      {editedImage && <img src={editedImage} alt="Uploaded" />}
    </div>
  );
}

export default Main;
