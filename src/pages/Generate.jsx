import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../component/card/Card';
import Aurora from '../component/templatesMarkdown/aurora/aurora';
import Ethereal from '../component/templatesMarkdown/ethereal/ethereal';
import Lumos from '../component/templatesMarkdown/lumos/lumos';
import React, { useRef } from "react";

const Generate = () => {

    const location = useLocation();
    const { generateHeading } = location.state || {};

    const navigate = useNavigate();
    const handleBackToEdit = () => {
        navigate("/");
    };

    // For Copy
    const contentRef = useRef();
    const handleCopy = () => {
        if (contentRef.current) {
            const textToCopy = contentRef.current.innerText;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert(`Content from ${generateHeading} copied to clipboard!`);
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
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
                <div className="flex justify-between items-center w-full">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleBackToEdit}>
                        <img src={`../icons/back.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Back to Edit
                    </button>

                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleCopy}>
                        <img src={`../icons/downloading.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Copy code
                    </button>

                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleDownload}>
                        <img src={`../icons/link.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Download code
                    </button>
                </div>

                <div className='mt-6'>
                    <Card>
                        <div ref={contentRef}>
                            {generateHeading === "Aurora" && <Aurora />}
                            {generateHeading === "Ethereal" && <Ethereal />}
                            {generateHeading === "Lumos" && <Lumos />}
                        </div>
                    </Card>
                </div>

            </div>
            <div>
                {/* <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3hyZzV4MWNlMG5nYW1uMTFrbnl3Mmt2NHFzOXJlb2g5dzg5YTU5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HkCXoK2qN8vzTMiegK/giphy.gif" /> */}
                <img src="https://media.giphy.com/media/li9IQKvhVw1wgUUzCV/giphy.gif?cid=ecf05e47uvr9m8l7botcnwhzpsv703ohyq4y5hezarr7cukc&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
                <h3>Keep growing</h3>
            </div>
        </div>
    )
}

export default Generate