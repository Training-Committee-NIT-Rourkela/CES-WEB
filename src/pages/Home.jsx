import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkContainer,DarkButton } from "../styles"

const Home = () => {
    const navigate = useNavigate();

    return (
        <DarkContainer>
            <h2>Welcome to CES Portal</h2>
            <DarkButton onClick={() => navigate("/signup")}>Sign Up</DarkButton>
            <DarkButton onClick={() => navigate("/login")}>Login</DarkButton>
        </DarkContainer>
    );
};

export default Home;
