import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { Result, Admin, ResultTab, AdminPanel } from "./components/index.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Result />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/admin-panel/:username/:password" element={<AdminPanel />} />
            <Route path="result/:rollno/:mobileno" element={<ResultTab />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

