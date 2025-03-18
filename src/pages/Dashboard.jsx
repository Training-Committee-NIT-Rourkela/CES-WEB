import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #222;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  background-color: #333;
  border-radius: 5px;

  &:hover {
    background-color: #444;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const TopRightIcon = styled(FaUser)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
`;

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <SidebarItem onClick={() => navigate("/profile")}>User Profile</SidebarItem>
        <SidebarItem onClick={() => navigate("/profile#scores")}>Scores</SidebarItem>
        <SidebarItem onClick={() => navigate("/upload")}>Upload Resume</SidebarItem>
        <SidebarItem>Coordinator Dashboard</SidebarItem>
      </Sidebar>
      <MainContent>
        <h2>Welcome, {user?.email.toUpperCase()}</h2>
        <p>Select an option from the sidebar.</p>
      </MainContent>
      <TopRightIcon onClick={() => navigate("/profile")} />
    </Container>
  );
};

export default Dashboard;
