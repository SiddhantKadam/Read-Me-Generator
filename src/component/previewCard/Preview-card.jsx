import React from "react";
import "./Preview-card.css";
import Aurora from "../templates/aurora/aurora";
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
        navigate('/generate', { state: { heading: heading } });
    };

    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                    {heading}
                </div>
                <hr />
                <img className="mt-3" src={thumbnail} />

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
            </a>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="rounded-lg shadow-lg w-full max-w-5xl p-8" style={{ backgroundColor: "#0d1117" }}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold">{heading}</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 text-2xl"
                            >
                                ✖
                            </button>
                        </div>
                        <div className="text-gray-700 space-y-4">
                            <Aurora />
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