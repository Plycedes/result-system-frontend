import React from "react";
import { useParams } from "react-router-dom";

function AdminPanel() {
    const { username, password } = useParams();
    return <div>AdminPanel</div>;
}

export default AdminPanel;
