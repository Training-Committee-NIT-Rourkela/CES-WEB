import React from "react";
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

const Card = styled.div`
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

const ScoresTab = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #333;
  border-radius: 5px;
`;

const UserProfile = ({ user }) => {
    return (
        <Container>
            <h2>User Profile</h2>
            <Card>
                <p><strong>Name:</strong> {user?.name || "John Doe"}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Contact:</strong> +91-9876543210</p>

                <ScoresTab>
                    <h3>Scores</h3>
                    <p>Evaluation Test - I: <strong>152/200</strong></p>
                    <p>Evaluation Test - II: <strong>176/200</strong></p>
                    <p>Recruitment Simulation: <strong>250/300</strong></p>
                </ScoresTab>
            </Card>
        </Container>
    );
};

export default UserProfile;
