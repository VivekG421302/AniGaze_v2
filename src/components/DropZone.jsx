import React, { useState, useRef } from "react";

const DropZone = ({ label, onUpload }) => {
  const [borderColor, setBorderColor] = useState("#aaa");
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (isImage || isVideo) {
      setPreviewUrl(url);
      setBorderColor("green");
      onUpload(file);
    } else {
      setBorderColor("red");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);

    if (droppedFiles.length !== 1) {
      setBorderColor("red");
      return;
    }

    handleFile(droppedFiles[0]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length !== 1) {
      setBorderColor("red");
      return;
    }

    handleFile(selectedFiles[0]);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleClick}
        style={{
          border: `2px dashed ${borderColor}`,
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor: "var(--main)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--prime)",
          overflow: "hidden",
          position: "relative",
          textAlign: "center",
          padding: "0px 10px"
        }}
      >
        {previewUrl ? (
          previewUrl.endsWith(".mp4") || previewUrl.includes("video") ? (
            <video
              src={previewUrl}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={previewUrl}
              alt="Preview"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )
        ) : (
          `Drop your ${label} here or click to upload`
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple={false}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default DropZone;
