import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../component/card/Card';
import Aurora from '../component/templatesMarkdown/aurora/aurora';
import Ethereal from '../component/templatesMarkdown/ethereal/ethereal';
import Lumos from '../component/templatesMarkdown/lumos/lumos';
import React, { useRef } from "react";

const Generate = () => {

    const location = useLocation();
    const { heading } = location.state || {};

    const navigate = useNavigate();
    const handleBackToEdit = () => {
        navigate("/");
    };

    const contentRef = useRef();
    const handleCopy = () => {
        if (contentRef.current) {
            const textToCopy = contentRef.current.innerText;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert(`Content from ${heading} copied to clipboard!`);
                })
                .catch((error) => {
                    console.error("Failed to copy content:", error);
                });
        }
    };

    const handleDownload = () => {
        if (contentRef.current) {
          const content = contentRef.current.innerText;
    
          const jsonContent = JSON.stringify({ heading, content }, null, 2);
    
          const blob = new Blob([jsonContent], { type: "application/json" });
    
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${heading}-content.json`;
          a.click();
    
          URL.revokeObjectURL(url);
        }
      };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 justify-items-center items-center h-full">
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleBackToEdit}>
                        <img src={`../icons/back.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Back to Edit
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleCopy}>
                        <img src={`../icons/downloading.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Copy code
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="primary-button flex items-center justify-center pr-6 pl-3 py-2 font-semibold w-60" onClick={handleDownload}>
                        <img src={`../icons/link.png`} className="w-5 h-5 mr-2" alt="Preview Icon" />
                        Download code
                    </button>
                </div>
            </div>

            <div className='mt-6'>
                <Card>
                    <div ref={contentRef}>
                        {heading === "Aurora" && <Aurora />}
                        {heading === "Ethereal" && <Ethereal />}
                        {heading === "Lumos" && <Lumos />}
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default Generate