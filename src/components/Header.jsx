import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import axios from "axios";

export default function Header() {
    const { admin, createAdmin } = useAdmin();
    useEffect(() => {}, [admin]);

    const myConfig = {
        header: {
            Authorization: admin.refreshToken,
        },
    };

    const logoutAdmin = async () => {
        try {
            console.log(admin.refreshToken);
            createAdmin({ username: "", access_token: "" });
            const response = await axios.post("/api/v1/admin/logout", myConfig);
            console.log(response);
        } catch (error) {
            if (axios.isCancel(error)) {
                return;
            }
            console.log(error);
        }
    };
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Results
                        </Link>
                        {!admin.username && (
                            <Link
                                to="admin"
                                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Admin
                            </Link>
                        )}
                        {admin.username && (
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={logoutAdmin}
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
