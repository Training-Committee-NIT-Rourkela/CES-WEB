import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContainer, MainContent, Sidebar, SidebarItem, TopRightIcon } from "../styles";


const Dashboard = ({ user }) => {
    const navigate = useNavigate();

    return (
        <DashboardContainer>
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
        </DashboardContainer>
    );
};

export default Dashboard;
