import React, { useEffect, useState } from "react";
import { auth, signInWithEmailLink, isSignInWithEmailLink, sendSignInLinkToEmail } from "../firebase";
import { useNavigate } from "react-router-dom";
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

const Login = ({ setUser }) => {
    const [rollNumber, setRollNumber] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            const email = window.localStorage.getItem("emailForSignIn");
            if (email) {
                signInWithEmailLink(auth, email, window.location.href)
                    .then((result) => {
                        setUser(result.user);
                        window.localStorage.removeItem("emailForSignIn");
                        navigate("/dashboard");
                    })
                    .catch((error) => {
                        console.error("Login failed:", error);
                    });
            }
        }
    }, [navigate, setUser]);

    const handleLogin = async () => {
        if (!rollNumber) {
            alert("Please enter your Roll Number");
            return;
        }

        const email = `${rollNumber}@nitrkl.ac.in`;
        const actionCodeSettings = {
            url: "http://localhost:5173/login",
            handleCodeInApp: true,
        };

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem("emailForSignIn", email);
            alert(`Login link sent to ${email}. Check your email.`);
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send login link.");
        }
    };

    return (
        <Container>
            <Card>
                <h2>Login</h2>
                <Input type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                <Button onClick={handleLogin}>Send Login Link</Button>
            </Card>
        </Container>
    );
};

export default Login;
