import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Toaster = ({ message }) => {
    useEffect(() => {
        if (message === "success") {
            toast.success("Form submitted successfully!", {
                position: "top-right",
                autoClose: 2000
            });
        } else if (message === "failed") {
            toast.error("Form submission failed!", {
                position: "top-right",
                autoClose: 2000
            });
        } else if (message === "copy") {
            toast.success("Copied to clipboard!", {
                position: "top-right",
                autoClose: 2000
            });
        }
    }, [message]); // Runs when the message prop changes

    return null; // Toaster is handled globally via ToastContainer
};

export default Toaster;
