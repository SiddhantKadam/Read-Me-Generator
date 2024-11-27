import React from "react";
import "./Preview-card.css";
import Aurora from "../templates/aurora/aurora";
import Ethereal from "../templates/ethereal/ethereal";
import { useNavigate } from 'react-router-dom';

const PreviewCard = ({ heading, thumbnail }) => {

    // Modal
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Navigate to generate
    const navigate = useNavigate();

    const handleGenerateTemplate = () => {
        navigate('/generate', { state: { generateHeading: heading } });
    };

    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                    {heading}
                </div>
                <hr />

                {thumbnail ? (
                    <div style={{ minHeight: "300px" }}>
                        <img className="mt-3" src={thumbnail} alt="Thumbnail" />
                    </div>
                ) : (
                    <div style={{ minHeight: "360px" }} className="mt-3 flex items-center justify-center text-gray-500 font-semibold">
                        <h1 className="text-4xl">Coming Soon...</h1>
                    </div>
                )}

                {thumbnail && (
                    <div className="flex ag-courses-item_date-box mt-4">
                        <button
                            onClick={openModal}
                            className="primary-button flex pr-6 pl-3 py-2 font-semibold w-32"
                        >
                            <img
                                src={`../icons/eye.png`}
                                className="w-5 h-5 mr-2 mt-1"
                                alt="Preview Icon"
                            />
                            Preview
                        </button>
                        <button className="primary-button flex pr-6 pl-3 py-2 mx-4 font-semibold w-32" onClick={handleGenerateTemplate}>
                            <img
                                src={`../icons/touchscreen.png`}
                                className="w-5 h-5 mr-2 mt-1"
                                alt="Select Icon"
                            />
                            Select
                        </button>
                    </div>
                )}
            </a>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="rounded-lg shadow-lg w-full max-w-5xl p-8" style={{ backgroundColor: "#0d1117", maxHeight: "80vh", overflow: "auto" }}>
                        <div className="flex justify-between items-center mb-6">
                            <h6 className="text-5xl primary-color font-semibold">{heading}</h6>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 text-2xl"
                            >
                                ✖
                            </button>
                        </div>
                        <hr />
                        <div className="text-gray-700 space-y-4 mt-4">
                            {heading === "Aurora" && <Aurora />}
                            {heading === "Ethereal" && <Ethereal />}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreviewCard;