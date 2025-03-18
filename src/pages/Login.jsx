import React, { useEffect, useState } from "react";
import { auth, signInWithEmailLink, isSignInWithEmailLink, sendSignInLinkToEmail } from "../lib/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { ThemedButton, ThemedCard, ThemedContainer, ThemedInput } from "../styles";

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
        <ThemedContainer>
            <ThemedCard>
                <h2>Login</h2>
                <ThemedInput type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                <ThemedButton onClick={handleLogin}>Send Login Link</ThemedButton>
            </ThemedCard>
        </ThemedContainer>
    );
};

export default Login;
