import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ResultTab() {
    const { rollno, mobileno } = useParams();

    const [result, setResult] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.post("/api/v1/result/getresult", {
                    rollno: rollno,
                    mobileno: mobileno,
                });
                setResult(response.data.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    return;
                }
                setError(true);
                console.log(error);
                setLoading(false);
            }
        })();
    }, []);
    return (
        <div>
            {loading && <h1 className="text-5xl">Loading...</h1>}
            {error && <h1 className="text-3xl">Something went wrong</h1>}

            {!loading && !error && (
                <div className="m-5 p-5">
                    <div className="mb-5">
                        <h2 className="text-3xl text-blue-500">Student Result</h2>
                    </div>
                    <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                        <table class="w-full text-left table-auto min-w-max">
                            <tbody>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50 bg-blue-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Name
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50 bg-blue-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.name}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Math
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.math}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Physics
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.physics}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Chemistry
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.chemistry}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            English
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.english}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-r border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Biology
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.biology}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-r">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Total
                                        </p>
                                    </td>
                                    <td class="p-4 ">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {result.math +
                                                result.physics +
                                                result.chemistry +
                                                result.english +
                                                result.biology}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResultTab;
