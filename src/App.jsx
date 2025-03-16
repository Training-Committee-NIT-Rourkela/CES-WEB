import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Upload from "./pages/Upload";
import Home from "./pages/Home";

const App = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp setUser={setUser} />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
                <Route path="/profile" element={user ? <UserProfile user={user} /> : <Login setUser={setUser} />} />
                <Route path="/upload" element={user ? <Upload /> : <Login setUser={setUser} />} />
            </Routes>
        </Router>
    );
};

export default App;
