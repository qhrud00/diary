// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Main() {
//   const navigate = useNavigate();

//   const handleTitleClick = () => {
//     navigate("/pic");
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <h1
//         style={{
//           marginTop: 0,
//           position: "absolute",
//           top: 30,
//           cursor: "pointer",
//         }}
//         onClick={handleTitleClick}
//       >
//         My Diary
//       </h1>
//     </div>
//   );
// }

// export default Main;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Main() {
//   const navigate = useNavigate();
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleTitleClick = () => {
//     navigate("/pic");
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       setUploadedImage(e.target.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         height: "100vh",
//       }}
//     >
//       <h1
//         style={{
//           marginTop: 0,
//           cursor: "pointer",
//         }}
//         onClick={handleTitleClick}
//       >
//         My Diary
//       </h1>

//       {uploadedImage && (
//         <div style={{ marginTop: 20 }}>
//           <img
//             src={uploadedImage}
//             alt="Uploaded"
//             style={{ width: 300, height: "auto" }}
//           />
//         </div>
//       )}

//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//     </div>
//   );
// }

// export default Main;
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
