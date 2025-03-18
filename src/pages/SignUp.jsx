import React, { useState } from "react";
import { auth, sendSignInLinkToEmail } from "../firebase";
import styled from "styled-components";
import { theme } from "../styles/theme";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.background};
  color: ${theme.text};
`;

const Card = styled.div`
  background: ${theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  background: ${theme.inputBackground};
  border: 1px solid ${theme.borderColor};
  color: ${theme.text};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  background: ${theme.primary};
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: ${theme.secondary};
  }
`;

const SignUp = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!rollNumber || !name) {
      alert("Please enter your Roll Number and Name");
      return;
    }

    const email = `${rollNumber}@nitrkl.ac.in`;
    const actionCodeSettings = {
      url: "http://localhost:5173/login",
      handleCodeInApp: true,
    };

    setLoading(true);
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert(`Verification link sent to ${email}. Check your email.`);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send verification link.");
    }
    setLoading(false);
  };

  return (
    <Container>
      <Card>
        <h2>Sign Up</h2>
        <Input type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={handleSignUp} disabled={loading}>{loading ? "Sending..." : "Sign Up"}</Button>
      </Card>
    </Container>
  );
};

export default SignUp;
