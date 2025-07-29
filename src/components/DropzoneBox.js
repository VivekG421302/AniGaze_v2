import React from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneBox({ onFileAccepted }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "video/mp4": [],
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #888",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        backgroundColor: isDragActive ? "#eee" : "#f9f9f9",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop an MP4 video or image here, or click to browse</p>
    </div>
  );
}
