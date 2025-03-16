import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  margin: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;
  width: 250px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

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
        <Container>
            <h2>Upload Resume</h2>
            <Input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
            <TextArea placeholder="Enter Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
            <Button onClick={handleSubmit}>Get Suggestions</Button>
            {response && <p>{response}</p>}
        </Container>
    );
};

export default Upload;
