import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { SiOpenai } from "react-icons/si";

export const AiForm: React.FC = () => {
    const [color, setColor] = useState("");
    const [habitat, setHabitat] = useState("");
    const [action, setAction] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex justify-center items-center flex-col bg-slate-900   py-4  rounded-lg shadow-lg border-2 border-slate-700"
        >
            <div className="mb-4">
                <label className="block text-gray-400 text-md font-bold mb-2">
                    Color :
                </label>
                <div className="grid grid-cols-6 gap-4">
                    <input
                        type="text"
                        value={color}
                        maxLength={22}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="e.g. red, blue, golden"
                        className="col-span-4 col-start-2 shadow appearance-none border rounded w-full py-2 px-4 text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span
                        className={`${
                            color.length === 0
                                ? "text-red-500"
                                : "text-green-500 "
                        } text-xl w-1/6 flex justify-center  items-center `}
                    >
                        {color.length === 0 ? "*" : "✓"}
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 text-md font-bold mb-2">
                    Habitat :
                </label>
                <div className="grid grid-cols-6 gap-4">
                    <input
                        type="text"
                        value={habitat}
                        onChange={(e) => setHabitat(e.target.value)}
                        placeholder="e.g. forest, swamp"
                        className="col-span-4 col-start-2 shadow appearance-none border rounded w-full py-2 px-4 text-slate-400 leading-tight focus:outline-none focus:shadow-outline "
                    />
                    <span
                        className={`${
                            habitat.length === 0
                                ? "text-red-500"
                                : "text-green-500 "
                        } text-xl w-1/6 flex justify-center  items-center `}
                    >
                        {habitat.length === 0 ? "*" : "✓"}
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 text-md font-bold mb-2">
                    Action :
                </label>
                <div className="grid grid-cols-6 gap-4">
                    <input
                        type="text"
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                        placeholder="e.g. running, jumping"
                        className="col-span-4 col-start-2 shadow appearance-none border rounded w-full py-2 px-4 text-slate-400 leading-tight focus:outline-none focus:shadow-outline "
                    />
                    <span
                        className={`${
                            action.length === 0
                                ? "text-red-500"
                                : "text-green-500 "
                        } text-xl w-1/6 flex justify-center  items-center `}
                    >
                        {action.length === 0 ? "*" : "✓"}
                    </span>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 text-md font-bold mb-2">
                    Body :
                </label>
                <div className="grid grid-cols-6 gap-4">
                    <input
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="e.g. dog, mouse, object"
                        className="col-span-4 col-start-2 shadow appearance-none border rounded w-full py-2 px-4 text-slate-400 leading-tight focus:outline-none focus:shadow-outline "
                    />
                    <span
                        className={`${
                            body.length === 0
                                ? "text-red-500"
                                : "text-green-500 "
                        } text-xl w-1/6 flex justify-center  items-center `}
                    >
                        {body.length === 0 ? "*" : "✓"}
                    </span>
                </div>
            </div>
            <Button
                className="px-8 py-2 mx-2 mt-2 text-xl font-medium text-white bg-purple-500 rounded-md "
                color="secondary"
                size="md"
                isDisabled={
                    action.length === 0 ||
                    body.length === 0 ||
                    color.length === 0 ||
                    habitat.length === 0
                        ? true
                        : false
                }
            >
                <SiOpenai />
                Generate
            </Button>
        </form>
    );
};

export default AiForm;
