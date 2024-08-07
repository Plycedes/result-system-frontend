import React, { useEffect, useState } from "react";
import { useAdmin } from "../context/AdminContext";
import AdminPanel from "./AdminPanel";
import Login from "./Login";

function Admin() {
    const { admin } = useAdmin();
    useEffect(() => {}, [admin]);
    return (
        <div>
            {!admin.username && <Login />}
            {admin.username && <AdminPanel />}
        </div>
    );
}

export default Admin;
