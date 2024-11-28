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
            <div className='pt-5 text-center'>
                <img className='mt-5' src="https://media.giphy.com/media/4IyfwJfx1WEGEIxSw6/giphy.gif?cid=ecf05e47fyhbr737guzwofq9z0gc9gu5xcnld79pjmrw9o9s&ep=v1_stickers_search&rid=giphy.gif&ct=ts" />
                {/* <img src="https://media.giphy.com/media/7ZeSOedaBmPTtnTgWt/giphy.gif?cid=ecf05e475y20on0nbj0cgznc1zpcdh2yin1lhmdx0au8ysji&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
                <h1 className="thankYou">Keep Growing</h1> */}
            </div>
        </div>
    )
}

export default Generate