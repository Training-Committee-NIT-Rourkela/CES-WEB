import React, { useState } from "react";
import { DarkButton, DarkContainer, DarkInput, TextArea } from "../styles";

const Upload = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [response, setResponse] = useState("");

  const handleFileUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!resume || !jobDescription) {
      setResponse("Please upload a resume and enter a job description.");
      return;
    }

    // Dummy AI response
    setResponse("Suggested Jobs: Software Engineer, Data Scientist. Related Videos: [Video1, Video2]");
  };

  return (
    <DarkContainer>
      <h2>Upload Resume</h2>
      <DarkInput type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
      <TextArea placeholder="Enter Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
      <DarkButton onClick={handleSubmit}>Get Suggestions</DarkButton>
      {response && <p>{response}</p>}
    </DarkContainer>
  );
};

export default Upload;