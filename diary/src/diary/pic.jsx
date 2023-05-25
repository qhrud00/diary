import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pic() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [text, setText] = useState("");
  const canvasRef = useRef(null);
  const canvasWidth = 500;
  const canvasHeight = 400;

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSaveImage = () => {
    if (uploadedImage) {
      console.log("Image saved:", uploadedImage);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const loadImage = () => {
      const image = new Image();
      image.src = uploadedImage;
      image.onload = () => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
        context.font = "30px Arial";
        context.fillText(text, 20, 50);
      };
    };

    if (uploadedImage) {
      loadImage();
    }
  }, [uploadedImage, text, canvasWidth, canvasHeight]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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

      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "1px solid black", marginTop: 20 }}
      />

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
        style={{ marginTop: 20, width: 300, height: 100 }}
      />

      <button onClick={handleSaveImage}>Save</button>
    </div>
  );
}

export default Pic;
