import React from "react";
import { DarkCard, DarkContainer, ScoresTab } from "../styles";

const UserProfile = ({ user }) => {
  return (
    <DarkContainer>
      <h2>User Profile</h2>
      <DarkCard>
        <p><strong>Name:</strong> {user?.name || "John Doe"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Contact:</strong> +91-9876543210</p>

        <ScoresTab>
          <h3>Scores</h3>
          <p>Evaluation Test - I: <strong>152/200</strong></p>
          <p>Evaluation Test - II: <strong>176/200</strong></p>
          <p>Recruitment Simulation: <strong>250/300</strong></p>
        </ScoresTab>
      </DarkCard>
    </DarkContainer>
  );
};

export default UserProfile;
