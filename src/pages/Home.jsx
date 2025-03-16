import React from "react";
import { useNavigate } from "react-router-dom";
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

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <h2>Welcome to CES Portal</h2>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
        </Container>
    );
};

export default Home;
