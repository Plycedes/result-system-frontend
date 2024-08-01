import React, { useState } from "react";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { AdminProvider } from "./context/AdminContext";
import { ToastContainer } from "react-toastify";

function App() {
    const [admin, setAdmin] = useState({ username: "", access_token: "" });

    const createAdmin = (admin) => {
        setAdmin(admin);
    };

    return (
        <AdminProvider value={{ admin, createAdmin }}>
            <Header />
            <Outlet />
            <ToastContainer />
        </AdminProvider>
    );
}

export default App;

