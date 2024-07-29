import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { createAdmin } = useAdmin();

    const adminLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/v1/admin/login", {
                username: username,
                password: password,
            });
            const admin = response.data.data;
            console.log(admin.user);
            createAdmin(admin.user);
        } catch (error) {
            if (axios.isCancel(error)) {
                return;
            }
            console.log(error);
        }
    };
    return (
        <div className="h-screen flex justify-center items-center ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={adminLogin}>
                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
