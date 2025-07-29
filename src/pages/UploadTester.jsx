import React, { useState } from "react";
import axios from "axios";

const UploadTester = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [responseSegments, setResponseSegments] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadProgress(0);
    setResponseSegments([]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a video file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/videos/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 0,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          withCredentials: true,
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      if (Array.isArray(response.data)) {
        setResponseSegments(response.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please check the console for more details.");
    }
  };

  return (
    <div
      className="upload-container"
      style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}
    >
      <h2>Upload Video</h2>

      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
        style={{
          marginTop: "1rem",
          cursor: selectedFile ? "pointer" : "not-allowed",
        }}
      >
        Upload
      </button>

      {uploadProgress > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <div
            style={{
              height: "20px",
              width: "100%",
              backgroundColor: "#eee",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${uploadProgress}%`,
                backgroundColor: "#4caf50",
                transition: "width 0.3s",
              }}
            />
          </div>
          <p>{uploadProgress}%</p>
        </div>
      )}

      {responseSegments.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Segments Received:</h3>
          <ul>
            {responseSegments.map((segment, index) => (
              <li key={index}>
                <strong>Part {segment.partNo}:</strong> {segment.fileName} <br />
                <code>fileId:</code> {segment.fileId}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadTester;
