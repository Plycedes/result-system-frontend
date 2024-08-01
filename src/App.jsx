import React, { useState } from "react";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { AdminProvider } from "./context/AdminContext";

function App() {
    const [admin, setAdmin] = useState({ username: "", access_token: "" });

    const createAdmin = (admin) => {
        setAdmin(admin);
    };

    return (
        <AdminProvider value={{ admin, createAdmin }}>
            <Header />
            <Outlet />
        </AdminProvider>
    );
}

export default App;

