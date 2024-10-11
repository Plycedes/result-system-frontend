import React, { useState } from "react";
import { Link } from "react-router-dom";

function Result() {
    const [rollno, setRollno] = useState("");
    const [mobileno, setMobileno] = useState("");
    return (
        <div className="h-screen flex justify-center items-center ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Roll Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Roll Number"
                        value={rollno}
                        onChange={(e) => {
                            setRollno(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Mobile Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text"
                        placeholder="******************"
                        value={mobileno}
                        onChange={(e) => {
                            setMobileno(e.target.value);
                        }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        <Link to={`result/${rollno}/${mobileno}`}>View Result</Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Result;
