import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ResultTab() {
    const { rollno, mobileno } = useParams();

    const [result, setResult] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {}, []);
    return (
        <div>
            {loading && <h1 className="text-5xl">Loading...</h1>}
            {error && <h1 className="text-3xl">Something went wrong</h1>}

            {!loading && !error && (
                <div className="m-5 p-5">
                    <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                        <table class="w-full text-left table-auto min-w-max">
                            <tbody>
                                <tr>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            John Michael
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Manager
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Alexa Liras
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Developer
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Laurent Perrier
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Executive
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Michael Levi
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Developer
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-4">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Richard Gran
                                        </p>
                                    </td>
                                    <td class="p-4">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Manager
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResultTab;
