import React, { useState } from "react";
import { auth, sendSignInLinkToEmail } from "../lib/firebase/firebase";
import { ThemedButton, ThemedCard, ThemedContainer, ThemedInput } from "../styles";

const SignUp = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

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
    <ThemedContainer>
      <ThemedCard>
        <h2>Sign Up</h2>
        <ThemedInput type="text" placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
        <ThemedInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <ThemedButton onClick={handleSignUp} disabled={loading}>{loading ? "Sending..." : "Sign Up"}</ThemedButton>
      </ThemedCard>
    </ThemedContainer>
  );
};

export default SignUp;
