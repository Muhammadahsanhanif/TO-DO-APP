import { useState } from "react";

function UseState() {
    const [UserName, setUserName] = useState("");
    const [users, setUsers] = useState([]);

    const addUser = () => {
        if (UserName.trim() !== "") {
            setUsers([...users, UserName.trim()]);
            setUserName("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="flex flex-col items-center m-10 p-8 border rounded-lg shadow-xl bg-white max-w-md mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6" >To-Do List <i className="fa-regular fa-pen-to-square" /></h1>
                <div className="w-full mb-6">
                    <input
                        value={UserName}
                        placeholder="Enter your task"
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full border rounded-lg p-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={addUser}
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2 text-lg"
                    >
                        <i className="fas fa-plus"></i>
                        Add Task
                    </button>
                    <button
                        onClick={() => setUsers([])}
                        className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300 flex items-center gap-2 text-lg"
                    >
                        <i className="fas fa-trash"></i>
                        Clear All
                    </button>
                </div>
                <div className="w-full">
                    {users.length > 0 ? (
                        users.map((data, ind) => (
                            <div
                                className="flex justify-between items-center text-xl font-medium my-2 bg-purple-100 p-4 rounded-lg shadow-sm"
                                key={ind}
                            >
                                <span className="text-gray-700">{data}</span>
                                <i className="fas fa-check text-green-500"></i>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No tasks added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UseState;
