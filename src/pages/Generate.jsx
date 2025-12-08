import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../component/card/Card';
import Aurora from '../component/templatesMarkdown/aurora/aurora';
import Ethereal from '../component/templatesMarkdown/ethereal/ethereal';
import Lumos from '../component/templatesMarkdown/lumos/lumos';
import React, { useRef, useState } from "react";
import Toaster from '../component/toaster/toaster';

const Generate = () => {

    const location = useLocation();
    const { generateHeading } = location.state || {};

    const navigate = useNavigate();
    const handleBackToEdit = () => {
        navigate("/");
    };

    const [message, setMessage] = useState("");

    // For Copy
    const contentRef = useRef();
    const handleCopy = () => {
        if (contentRef.current) {
            const textToCopy = contentRef.current.innerText;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setMessage("copy");
                    setTimeout(() => setMessage(""), 1500); // Reset after 1.5 sec
                })
                .catch((error) => {
                    console.error("Failed to copy content:", error);
                });
        }
    };

    // For Download
    const handleDownload = () => {
        if (contentRef.current) {
            const content = contentRef.current.innerText;

            const jsonContent = JSON.stringify({ generateHeading, content }, null, 2);

            const blob = new Blob([jsonContent], { type: "application/json" });

            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${generateHeading}-content.json`;
            a.click();

            URL.revokeObjectURL(url);
        }
    };

    return (
        <div>
            <Toaster message={message} />
            <div className='grid grid-cols-4 min-h-screen'>
                {/* Left side: 3 columns */}
                <div className='col-span-3'>
                    <div className="flex justify-between items-center w-full">
                        <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleBackToEdit}>
                            <img src={`${process.env.PUBLIC_URL}/icons/back.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                            Back to Edit
                        </button>

                        <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleCopy}>
                            <img src={`${process.env.PUBLIC_URL}/icons/link.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                            Copy code
                        </button>

                        <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleDownload}>
                            <img src={`${process.env.PUBLIC_URL}/icons/downloading.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                            Download code
                        </button>
                    </div>

                    <div className='mt-6 border rounded-xl mb-4 dark:bg-gray-800 text-white'>
                        <Card>
                            <div ref={contentRef}>
                                {generateHeading === "Aurora" && <Aurora />}
                                {generateHeading === "Ethereal" && <Ethereal />}
                                {generateHeading === "Lumos" && <Lumos />}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Right side: 1 column, vertically centered */}
                <div className="flex justify-center items-center">
                    <img src="https://static.skusavvy.com/3d35e77a-6449-4448-bc92-258ccd41ac72.gif" alt="centered gif" className="max-h-screen" />
                </div>
            </div>

        </div>
    )
}

export default Generate