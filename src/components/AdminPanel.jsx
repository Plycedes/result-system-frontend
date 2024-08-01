import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import axios from "axios";

function AdminPanel() {
    const { admin } = useAdmin();

    const [resultForm, setResultForm] = useState(true);
    const [passwordForm, setPasswordForm] = useState(false);

    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [math, setMath] = useState("");
    const [physics, setPhysics] = useState("");
    const [chemistry, setChemistry] = useState("");
    const [biology, setBiology] = useState("");
    const [english, setEnglish] = useState("");

    const [message, setMessage] = useState("");

    const config = {
        header: {
            Authentication: admin.refreshToken,
        },
    };

    const addResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "api/v1/admin/setresult",
                {
                    name: name,
                    rollno: rollno,
                    mobileno: mobileno,
                    math: math,
                    physics: physics,
                    chemistry: chemistry,
                    biology: biology,
                    english: english,
                },
                config
            );
            console.log(response.data);
            setName("");
            setRollno("");
            setMobileno("");
            setMath("");
            setPhysics("");
            setChemistry("");
            setBiology("");
            setEnglish("");
        } catch (error) {
            if (axios.isCancel(error)) {
                return;
            }
            console.log(error);
        }
    };
    return (
        <>
            {resultForm && !passwordForm && (
                <div className="h-screen flex justify-center items-center mt-20 mb-20 ">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={addResult}
                    >
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Name of Student
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name of Student"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="rollno"
                            >
                                Roll Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="rollno"
                                type="text"
                                placeholder="Roll Number"
                                value={rollno}
                                onChange={(e) => setRollno(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="mobileno"
                            >
                                Mobile Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobileno"
                                type="text"
                                placeholder="Mobile Number"
                                value={mobileno}
                                onChange={(e) => setMobileno(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="math"
                            >
                                Math
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="math"
                                type="text"
                                placeholder="Math"
                                value={math}
                                onChange={(e) => setMath(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="physics"
                            >
                                Physics
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="physics"
                                type="text"
                                placeholder="Physics"
                                value={physics}
                                onChange={(e) => setPhysics(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="chemistry"
                            >
                                Chemistry
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="chemistry"
                                type="text"
                                placeholder="Chemistry"
                                value={chemistry}
                                onChange={(e) => setChemistry(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="biology"
                            >
                                Biology
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="biology"
                                type="text"
                                placeholder="Biology"
                                value={biology}
                                onChange={(e) => setBiology(e.target.value)}
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                for="english"
                            >
                                English
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="english"
                                type="text"
                                placeholder="English"
                                value={english}
                                onChange={(e) => setEnglish(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add Result
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default AdminPanel;
