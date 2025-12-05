import { React, useState, useEffect } from "react";
import TextBox from "../component/textBox/Text-box.jsx";
import SelectDropdown from "../component/selectDropdown/Select-Dropdown.js";
import { useNavigate } from 'react-router-dom';
import IconCheckbox from "../component/iconCheckbox/Icon-checkbox.jsx";
import { skillsData } from "../config/constants/icons.js";
import { addOnsData } from "../config/constants/add-ons.js";
import Toaster from "../component/toaster/toaster.jsx";

const allSkills = skillsData;

const addOns = addOnsData;

const urlRegex = /^https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(?:\/[^\s]*)?(?:\?[a-zAZ0-9&=_-]+)*$/;

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        workTitle: "",
        aboutMe: "",
        currentProjectName: "",
        currentProjectLink: "",
        currentProjectDecription: "",
        interestedProjectName: "",
        interestedProjectLink: "",
        interestedProjectDescription: "",
        learningSkills: "",
        skilledIn: "",

        email: "",
        twitter: "",
        facebook: "",
        instagram: "",
        youTube: "",

        portfolio: "",
        resume: "",

        selectedSkills: [],
        selectedAddOns: [],

        gitHub: "",
        linkdin: "",
        medium: "",
        codepen: "",
        devTo: "",
        codeSandBox: "",
        stackOverflow: "",
        leetCode: "",
        behance: "",
        discord: "",

        certifications: [
            {
                name: "",
                issuedBy: "",
                issueDate: "",
                expiryDate: "",
                url: "",
                description: "",
                skills: ""
            }
        ],

        gifLink: "",
        quote: ""
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const titles = ["Mr.", "Ms.", "Mrs.", "Other"];
    // const [selectedTitle, setSelectedTitle] = useState("");

    const navigate = useNavigate();

    // State for search query
    const [searchQuery, setSearchQuery] = useState("");

    // First Submit
    const [submitted, setSubmitted] = useState(false);

    // Filter skills based on the search query
    const filteredSkills = allSkills.map((skillCategory) => ({
        ...skillCategory,
        array: skillCategory.array.filter((skill) =>
            skill.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    // Set data from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const saveData = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (validate(formData)) {
            localStorage.removeItem("formData");
            localStorage.setItem("formData", JSON.stringify(formData));
            setMessage("success");
            setTimeout(() => {
                navigate('/preview');
            }, 1000)
        } else {
            alert("Failed");
        }
    };

    // Validation logic
    const validate = (data) => {
        let formIsValid = true;
        let newErrors = {};

        // Name validation (must have at least 3 characters)
        if (!data.name?.trim()) {
            formIsValid = false;
            newErrors.name = 'Name is required';
        } else if ((data.name?.trim().length < 3) || (data.name?.trim().length > 20)) {
            formIsValid = false;
            newErrors.name = 'Minimum 3 & Maximun 20 characters allowed';
        }

        // Title validation (must be "Mr." or "Ms.")
        if (!data.title) {
            formIsValid = false;
            newErrors.title = 'Title is required';
        }

        if (!data.workTitle?.trim()) {
            formIsValid = false;
            newErrors.workTitle = 'Work title is required';
        } else if ((data.workTitle?.trim().length < 3) || (data.workTitle?.trim().length > 100)) {
            formIsValid = false;
            newErrors.workTitle = 'Minimum 3 & Maximun 100 characters allowed';
        }

        // About Me
        if (!data.aboutMe) {
            formIsValid = false;
            newErrors.aboutMe = 'About section is required';
        } else if (data.aboutMe?.trim().length > 500) {
            formIsValid = false;
            newErrors.aboutMe = 'Maximun 500 characters allowed';
        }

        // Email
        if (!data.email) {
            formIsValid = false;
            newErrors.email = 'Email ID is required';
        } else if ((data.email) && (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email))) {
            formIsValid = false;
            newErrors.email = 'Invalid EmailID';
        } else if (data.email?.trim().length > 50) {
            formIsValid = false;
            newErrors.email = 'Maximun 50 characters allowed';
        }

        // Portfolio
        if ((data.portfolio) && (!urlRegex.test(data.portfolio))) {
            formIsValid = false;
            newErrors.portfolio = 'Invalid URL';
        } else if (data.portfolio?.trim().length > 50) {
            formIsValid = false;
            newErrors.portfolio = 'Maximun 50 characters allowed';
        }

        // Resume
        if ((data.resume) && (!urlRegex.test(data.resume))) {
            formIsValid = false;
            newErrors.resume = 'Invalid URL';
        } else if (data.resume?.trim().length > 50) {
            formIsValid = false;
            newErrors.resume = 'Maximun 50 characters allowed';
        }

        // Learning Skills
        if (data.learningSkills?.trim()) {
            const input = data.learningSkills.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.learningSkills = 'Only 5 skills allowed';
            }
        } else if (data.learningSkills?.trim().length > 50) {
            formIsValid = false;
            newErrors.learningSkills = 'Maximun 50 characters allowed';
        }

        // Skilled In
        if (data.skilledIn?.trim()) {
            const input = data.skilledIn.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.skilledIn = 'Only 5 skills allowed';
            }
        } else if (data.skilledIn?.trim().length > 50) {
            formIsValid = false;
            newErrors.skilledIn = 'Maximun 50 characters allowed';
        }

        // Current Project
        if ((data.currentProjectName) && (/[^a-zA-Z\s]/.test(data.currentProjectName))) {
            formIsValid = false;
            newErrors.currentProjectName = 'Special characters not allowed';
        } else if (data.currentProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectName = 'Maximun 50 characters allowed';
        }

        if ((data.currentProjectLink) && (!urlRegex.test(data.currentProjectLink))) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Invalid URL';
        } else if (data.currentProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Maximun 50 characters allowed';
        }

        if (data.currentProjectDecription?.trim().length > 500) {
            formIsValid = false;
            newErrors.currentProjectDecription = 'Maximun 500 characters allowed';
        }

        // Interested Project
        if ((data.interestedProjectName) && (/[^a-zA-Z\s]/.test(data.interestedProjectName))) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Special characters not allowed';
        } else if (data.interestedProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Maximun 50 characters allowed';
        }

        if ((data.interestedProjectLink) && (!urlRegex.test(data.interestedProjectLink))) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Invalid URL';
        } else if (data.interestedProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Maximun 50 characters allowed';
        }

        if (data.interestedProjectDescription?.trim().length > 500) {
            formIsValid = false;
            newErrors.interestedProjectDescription = 'Maximun 500 characters allowed';
        }

        // Certifications
        if (data.certifications.length > 0) {
            data.certifications.forEach((cert, index) => {
                const rowFilled = isCertRowFilled(cert);

                // If user touched any field, validate all fields
                if (rowFilled) {

                    if (!cert.name || cert.name.trim() === "") {
                        newErrors[`cert_${index}_name`] = "Course Name is required";
                        formIsValid = false;
                    }

                    if (!cert.issuedBy || cert.issuedBy.trim() === "") {
                        newErrors[`cert_${index}_issuedBy`] = "Issued By is required";
                        formIsValid = false;
                    }

                    if (!cert.issueDate || cert.issueDate.trim() === "") {
                        newErrors[`cert_${index}_issueDate`] = "Year is required";
                        formIsValid = false;
                    }

                    if (!cert.description || cert.description.trim() === "") {
                        newErrors[`cert_${index}_description`] = "Description is required";
                        formIsValid = false;
                    }

                    if (!cert.skills || cert.skills.trim() === "") {
                        newErrors[`cert_${index}_skills`] = "Skills are required";
                        formIsValid = false;
                    }

                } else {
                    data.certifications = [];
                }
            })
        }

        // GitHub
        if (!data.gitHub?.trim()) {
            formIsValid = false;
            newErrors.gitHub = 'Github is required';
        } 
        // else if (!validateGithubUrl(data.gitHub)) {
        //     formIsValid = false;
        //     newErrors.gitHub = 'Enter a valid GitHub profile URL';
        // }

        // Twitter
        if (data.twitter?.trim().length > 50) {
            formIsValid = false;
            newErrors.twitter = 'Maximun 50 characters allowed';
        }

        // medium
        if (data.medium?.trim().length > 50) {
            formIsValid = false;
            newErrors.medium = 'Maximun 50 characters allowed';
        }

        // codepen
        if (data.codepen?.trim().length > 50) {
            formIsValid = false;
            newErrors.codepen = 'Maximun 50 characters allowed';
        }

        // linkdin
        if (data.linkdin?.trim().length > 50) {
            formIsValid = false;
            newErrors.linkdin = 'Maximun 50 characters allowed';
        }

        // devTo
        if (data.devTo?.trim().length > 50) {
            formIsValid = false;
            newErrors.devTo = 'Maximun 50 characters allowed';
        }

        // codeSandBox
        if (data.codeSandBox?.trim().length > 50) {
            formIsValid = false;
            newErrors.codeSandBox = 'Maximun 50 characters allowed';
        }

        // stackOverflow
        if (data.stackOverflow?.trim().length > 50) {
            formIsValid = false;
            newErrors.stackOverflow = 'Maximun 50 characters allowed';
        }

        // leetCode
        if (data.leetCode?.trim().length > 50) {
            formIsValid = false;
            newErrors.leetCode = 'Maximun 50 characters allowed';
        }

        // behance
        if (data.behance?.trim().length > 50) {
            formIsValid = false;
            newErrors.behance = 'Maximun 50 characters allowed';
        }

        // Facebook
        if (data.facebook?.trim().length > 50) {
            formIsValid = false;
            newErrors.facebook = 'Maximun 50 characters allowed';
        }

        // Instagram
        if (data.instagram?.trim().length > 50) {
            formIsValid = false;
            newErrors.instagram = 'Maximun 50 characters allowed';
        }

        // YouTube
        if (data.youTube?.trim().length > 50) {
            formIsValid = false;
            newErrors.youTube = 'Maximun 50 characters allowed';
        }

        // discord
        if (data.discord?.trim().length > 50) {
            formIsValid = false;
            newErrors.discord = 'Maximun 50 characters allowed';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const validateGithubUrl = (url) => {
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/(?!-)(?!.*--)[A-Za-z0-9-]{1,39}(?<!-)\/?$/;
        return githubRegex.test(url);
    };

    const isCertRowFilled = (cert) => {
        return Object.values(cert).some(value => value?.trim() !== "");
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        let updatedFormData = {};

        // Update formData correctly
        setFormData((prev) => {
            if (name === "selectedSkills") {
                updatedFormData = {
                    ...prev,
                    selectedSkills: checked
                        ? [...prev.selectedSkills, value]
                        : prev.selectedSkills.filter((id) => id !== value)
                };
            } else if (name === "selectedAddOns") {
                updatedFormData = {
                    ...prev,
                    selectedAddOns: checked
                        ? [...prev.selectedAddOns, value]
                        : prev.selectedAddOns.filter((id) => id !== value)
                };
            } else {
                updatedFormData = { ...prev, [name]: value };
            }

            if (submitted) {
                validate(updatedFormData);
            }

            return updatedFormData;
        });

        // Clear error for current field immediately
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    // Show More button
    const [showAllSkills, setShowAllSkills] = useState(false);
    let totalSkillCount = 0;
    const SKILL_LIMIT = 6;

    // Add certificates
    const addCertification = () => {
        setFormData((prev) => ({
            ...prev,
            certifications: [
                ...prev.certifications,
                {
                    name: "",
                    issuedBy: "",
                    issueDate: "",
                    expiryDate: "",
                    url: "",
                    skills: "",
                    description: ""
                }
            ]
        }));
    };

    const removeCertification = (index) => {
        setFormData((prev) => ({
            ...prev,
            certifications: prev.certifications.filter((_, i) => i !== index)
        }));
    };

    const handleCertChange = (e, index, key) => {
        const value = e.target.value;
        setFormData((prev) => {
            const updated = [...prev.certifications];
            updated[index][key] = value;
            return { ...prev, certifications: updated };
        });
    };
    // Add certificates

    // GIF
    const gifs = [
        { id: 0, src: "https://cdn-icons-gif.flaticon.com/9696/9696871.gif" },
        { id: 1, src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZTY2NHRmZzkwYzNucm15ankycXFpNTEwOWdocjl5MnMyY3l0dnR3ZSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/tOFKFDbeh9V7y/giphy.gif" },
        { id: 2, src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2xubGFhaDI5aDlqczcwd2Q5amI5dHF6eXE0eXhmbnNneDlzaHVjMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWu82QD3pj4wvEQ/giphy.gif" },
        { id: 3, src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d2RvOG5ycHA3OG12ZTMxazR3ZXk5Z3lkMWlncGQ3OWgyNjY5MWU2ayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/jUZmz3kAiAuLC/giphy.gif" }
        // { id: 4, src: "https://media.tenor.com/2roX3uxz_68AAAAC/cat-computer.gif" },
        // { id: 5, src: "https://media.tenor.com/nebZyl8vQZsAAAAM/coding-typing.gif" },
        // { id: 6, src: "https://media.tenor.com/Fi5zqS4WCSCwAAAAM/yes-happy.gif" },
        // { id: 7, src: "https://media.tenor.com/IHdlTRsmcS4AAAAM/programming-computer.gif" },
        // { id: 8, src: "https://media.tenor.com/BpcvHgKudfIAAAAM/workout-gym.gif" },
        // { id: 9, src: "https://media.tenor.com/eW-Dm1n06TgAAAAM/thumbs-up-okay.gif" },
        // { id: 10, src: "https://media.tenor.com/p4zvN3kCXbIAAAAM/party-happy.gif" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextGif = () => {
        setCurrentIndex((prev) => (prev + 1) % gifs.length);
    };

    const prevGif = () => {
        setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
    };

    const clearGifSelection = () => {
        setCurrentIndex(0);
    };
    // GIF

    return (
        <div>
            <Toaster message={message} />
            <form onSubmit={saveData}>
                <div className="flex justify-between items-center w-full">
                    <h6 className="text-5xl mb-5 primary-color font-semibold">GitHub Profile README Generator</h6>
                    <button className="primary-button flex pr-6 pl-3 py-2 font-semibold" onClick={() => window.open("https://github.com/SiddhantKadam/Read-Me-Generator", "_blank")}>
                        <img src={`${process.env.PUBLIC_URL}/gifs/star.gif`} className="w-5 h-5 mr-2 mt-1" /> Star this repo
                    </button>
                </div>
                <hr />

                <div className="grid grid-cols-2 gap-1 mt-3">
                    <div>
                        <div className="grid grid-cols-3 gap-1">
                            <div className="col-span-1 mb-5">
                                <SelectDropdown
                                    icon="equality.png"
                                    label="Title"
                                    name={"title"}
                                    required={true}
                                    options={titles}
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                {errors.title && <span className="errorMsg">{errors.title}</span>}
                            </div>
                            <div className="col-span-2 mb-6">
                                <TextBox icon="user.png" placeholder="Enter your name" name={"name"} value={formData.name} required={true} onChange={handleChange} />
                                {errors.name && <span className="errorMsg">{errors.name}</span>}
                            </div>
                        </div>
                        <div>
                            <TextBox icon="search.png" placeholder="Enter your work title" name={"workTitle"} value={formData.workTitle} required={true} onChange={handleChange} />
                            {errors.workTitle && <span className="errorMsg">{errors.workTitle}</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex" style={{ borderBottom: "2px solid #81fdff" }}>
                            <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <img src={`${process.env.PUBLIC_URL}/icons/info.png`} className="w-10 h-10" />
                            </span>
                            <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="aboutMe" value={formData.aboutMe} rows="6" cols="60" placeholder="About me..." onChange={handleChange}></textarea>
                        </div>
                        {errors.aboutMe && <span className="errorMsg">{errors.aboutMe}</span>}
                    </div>
                </div>

                <h6 className="primary-color font-semibold text-3xl mt-6 mb-3">About myself</h6>
                <hr></hr>

                {/* About me */}
                <div className="grid grid-cols-3 gap-1 mt-6 mb-6">
                    <div>
                        <TextBox icon="email.png" placeholder="Connect with me here e.g., siddhantk951@gmail.com" value={formData.email} name={"email"} onChange={handleChange} />
                        {errors.email && <span className="errorMsg">{errors.email}</span>}
                    </div>
                    <div>
                        <TextBox icon="briefcase.png" placeholder="Take a look at my portfolio e.g., www.siddhantportfolio.site" value={formData.portfolio} name={"portfolio"} onChange={handleChange} />
                        {errors.portfolio && <span className="errorMsg">{errors.portfolio}</span>}
                    </div>
                    <div>
                        <TextBox icon="personal-profile.png" placeholder="Resume link e.g., www.johndoeresume.com" value={formData.resume} name={"resume"} onChange={handleChange} />
                        {errors.resume && <span className="errorMsg">{errors.resume}</span>}
                    </div>
                </div>

                {/* Connect with me */}
                <div className="grid grid-cols-3 gap-1 mb-6">
                    <div>
                        <TextBox icon="skill-development.png" placeholder="I'm building my skills in e.g, Java" value={formData.learningSkills} name={"learningSkills"} onChange={handleChange} />
                        {errors.learningSkills && <span className="errorMsg">{errors.learningSkills}</span>}
                    </div>
                    <div>
                        <TextBox icon="network.png" placeholder="Feel free to reach out to me regarding e.g., Python, ReactJS" value={formData.skilledIn} name={"skilledIn"} onChange={handleChange} />
                        {errors.skilledIn && <span className="errorMsg">{errors.skilledIn}</span>}
                    </div>
                </div>

                {/* Current project */}
                <div className="grid grid-cols-2 gap-1">
                    <div>
                        <div className="mb-6">
                            <TextBox icon="contribution.png" placeholder="Currently I'm contributing in e.g, Project name" value={formData.currentProjectName} name={"currentProjectName"} onChange={handleChange} />
                            {errors.currentProjectName && <span className="errorMsg">{errors.currentProjectName}</span>}
                        </div>
                        <div className="mb-6">
                            <TextBox icon="contribution.png" placeholder="Project link e.g, www.chatbot.com" value={formData.currentProjectLink} name={"currentProjectLink"} onChange={handleChange} />
                            {errors.currentProjectLink && <span className="errorMsg">{errors.currentProjectLink}</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex mb-6" style={{ borderBottom: "2px solid #81fdff" }}>
                            <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <img src={`${process.env.PUBLIC_URL}/icons/description.png`} className="w-10 h-10" />
                            </span>
                            <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="currentProjectDecription" value={formData.currentProjectDecription} rows="6" cols="60" placeholder="Project description" onChange={handleChange}></textarea>
                        </div>
                        {errors.currentProjectDecription && <span className="errorMsg">{errors.currentProjectDecription}</span>}
                    </div>
                </div>

                {/* Collaborate project */}
                <div className="grid grid-cols-2 gap-1">
                    <div>
                        <div className="mb-6">
                            <TextBox icon="interested.png" placeholder="I'm interested in contributing to e.g, Project name" value={formData.interestedProjectName} name={"interestedProjectName"} onChange={handleChange} />
                            {errors.interestedProjectName && <span className="errorMsg">{errors.interestedProjectName}</span>}
                        </div>
                        <div>
                            <TextBox icon="interested.png" placeholder="Project link e.g, www.facebook.com" value={formData.interestedProjectLink} name={"interestedProjectLink"} onChange={handleChange} />
                            {errors.interestedProjectLink && <span className="errorMsg">{errors.interestedProjectLink}</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex" style={{ borderBottom: "2px solid #81fdff" }}>
                            <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <img src={`${process.env.PUBLIC_URL}/icons/description.png`} className="w-10 h-10" />
                            </span>
                            <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="interestedProjectDescription" value={formData.interestedProjectDescription} rows="6" cols="60" placeholder="Interested Project description" onChange={handleChange}></textarea>
                        </div>
                        {errors.interestedProjectDescription && <span className="errorMsg">{errors.interestedProjectDescription}</span>}
                    </div>
                </div>

                {/* Skills */}
                <div className="flex justify-between items-center mt-6 mb-3">
                    {/* Left-aligned heading */}
                    <h6 className="primary-color font-semibold text-3xl">Skills</h6>

                    {/* Right-aligned search bar */}
                    <div className="flex items-center max-w-lg">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="simple-search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search skills..."
                            />
                        </div>
                    </div>

                </div>

                <hr />

                {filteredSkills.map((skillCategory) => {
                    const visibleSkills = showAllSkills
                        ? skillCategory.array
                        : skillCategory.array.filter(() => {
                            totalSkillCount++;
                            return totalSkillCount <= SKILL_LIMIT;
                        });

                    return (
                        visibleSkills.length > 0 && (
                            <div key={skillCategory.title} className="mt-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                    {skillCategory.title}:
                                </h3>

                                <ul className="grid w-full gap-10 md:grid-cols-6">
                                    {visibleSkills.map((skill) => (
                                        <li key={skill.id}>
                                            <IconCheckbox
                                                id={`${skill.id}-option`}
                                                name="selectedSkills"
                                                value={skill.id}
                                                onChange={handleChange}
                                                icon={skill.icon}
                                                checked={formData.selectedSkills.includes(skill.id)}
                                                label={skill.label}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    );
                })}

                <div className="flex justify-center mt-6">
                    <button type="button"
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        style={{ borderRadius: "15px", border: "1px solid #81fdff", padding: "3px 16px", backgroundColor: "transparent", color: "#fff", fontWeight: "600" }}
                    >
                        {showAllSkills ? "Show Less ⏶" : "Show More ⏷"}
                    </button>
                </div>

                {/* Certifications */}
                <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Certifications</h6>
                <hr></hr>

                <div className="mt-6">

                    {formData.certifications.map((cert, index) => (
                        <div key={index} className="border p-4 rounded-xl mb-4 bg-gray-50 dark:bg-gray-800">

                            {/* Certification Name */}
                            <div className="grid grid-cols-3 gap-1 mb-6">
                                <div>
                                    <TextBox
                                        icon="user.png"
                                        placeholder="Certification Name"
                                        name={`certifications[${index}].name`}
                                        value={formData.certifications[index].name}
                                        onChange={(e) => handleCertChange(e, index, "name")}
                                    />
                                    {errors[`cert_${index}_name`] && <p className="errorMsg">{errors[`cert_${index}_name`]}</p>}
                                </div>

                                {/* Issued By */}
                                <div>
                                    <TextBox
                                        icon="issue.png"
                                        placeholder="Issued By"
                                        name={`certifications[${index}].issuedBy`}
                                        value={formData.certifications[index].issuedBy}
                                        onChange={(e) => handleCertChange(e, index, "issuedBy")}
                                    />
                                    {errors[`cert_${index}_issuedBy`] && <p className="errorMsg">{errors[`cert_${index}_issuedBy`]}</p>}
                                </div>

                                {/* Issue Date */}
                                <div>
                                    <TextBox
                                        icon="schedule.png"
                                        placeholder="Issue Date (e.g. June 2024)"
                                        name={`certifications[${index}].issueDate`}
                                        value={formData.certifications[index].issueDate}
                                        onChange={(e) => handleCertChange(e, index, "issueDate")}
                                    />
                                    {errors[`cert_${index}_issueDate`] && <p className="errorMsg">{errors[`cert_${index}_issueDate`]}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-1">
                                <div>
                                    <div className="grid grid-cols-2 gap-1 mb-6">
                                        {/* Expiration Date */}
                                        <div>
                                            <TextBox
                                                icon="schedule.png"
                                                placeholder="Expiration Date (optional)"
                                                name={`certifications[${index}].expiryDate`}
                                                value={formData.certifications[index].expiryDate}
                                                onChange={(e) => handleCertChange(e, index, "expiryDate")}
                                            />
                                            {errors[`cert_${index}_expiryDate`] && <p className="errorMsg">{errors[`cert_${index}_expiryDate`]}</p>}
                                        </div>

                                        {/* Certificate URL */}
                                        <div>
                                            <TextBox
                                                icon="certification.png"
                                                placeholder="Certificate URL"
                                                name={`certifications[${index}].url`}
                                                value={formData.certifications[index].url}
                                                onChange={(e) => handleCertChange(e, index, "url")}
                                            />
                                            {errors[`cert_${index}_url`] && <p className="errorMsg">{errors[`cert_${index}_url`]}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <TextBox
                                            icon="skill.png"
                                            placeholder="Skills Covered (comma separated)"
                                            name={`certifications[${index}].skills`}
                                            value={formData.certifications[index].skills}
                                            onChange={(e) => handleCertChange(e, index, "skills")}
                                        />
                                        {errors[`cert_${index}_skills`] && <p className="errorMsg">{errors[`cert_${index}_skills`]}</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex" style={{ borderBottom: "2px solid #81fdff" }}>
                                        <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            <img src={`${process.env.PUBLIC_URL}/icons/description.png`} className="w-10 h-10" />
                                        </span>
                                        <textarea name={`certifications[${index}].description`} value={formData.certifications[index].description} rows="6" cols="60" placeholder="Short Description" onChange={(e) => handleCertChange(e, index, "description")} className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                                    </div>
                                    {errors[`cert_${index}_description`] && <p className="errorMsg">{errors[`cert_${index}_description`]}</p>}
                                </div>

                            </div>

                            {/* Skills Covered */}


                            {/* Remove Button */}
                            {formData.certifications.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeCertification(index)}
                                    className="mr-auto flex items-center gap-1 mt-2"
                                    style={{
                                        borderRadius: "15px",
                                        border: "3px solid red",
                                        padding: "3px 16px",
                                        backgroundColor: "lightRed",
                                        color: "#fff",
                                        fontWeight: "600",
                                    }}
                                >
                                    <span className="font-bold">✖</span> Remove
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-2">
                    {/* Add New Certification */}
                    <button
                        type="button"
                        onClick={addCertification}
                        className="ml-auto flex items-center gap-1" style={{ borderRadius: "15px", border: "3px solid green", padding: "0 16px", backgroundColor: "lightGreen", color: "#fff", fontWeight: "600" }}
                    >
                        <span className="text-xl font-bold">+</span> Add
                    </button>
                </div>

                {/* Networking */}
                <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Networking</h6>
                <hr></hr>

                <div className="grid grid-cols-8 gap-8 mt-6 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="github.png" placeholder="GitHub e.g., SiddhantKadam" value={formData.gitHub} name={"gitHub"} onChange={handleChange} />
                        {errors.gitHub && <span className="errorMsg">{errors.gitHub}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="twitter.png" placeholder="Twitter e.g., siddhantk98" value={formData.twitter} name={"twitter"} onChange={handleChange} />
                        {errors.twitter && <span className="errorMsg">{errors.twitter}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="medium.png" placeholder="Medium e.g., @siddhantk951" value={formData.medium} name={"medium"} onChange={handleChange} />
                        {errors.medium && <span className="errorMsg">{errors.medium}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="codepen.svg" placeholder="Codepen e.g., Siddhant98" value={formData.codepen} name={"codepen"} onChange={handleChange} />
                        {errors.codepen && <span className="errorMsg">{errors.codepen}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="linkedin.png" placeholder="LinkdIn e.g., siddhant-kadam-2883821a1" value={formData.linkdin} name={"linkdin"} onChange={handleChange} />
                        {errors.linkdin && <span className="errorMsg">{errors.linkdin}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="dev.png" placeholder="Dev.to e.g., Siddhant98" value={formData.devTo} name={"devTo"} onChange={handleChange} />
                        {errors.devTo && <span className="errorMsg">{errors.devTo}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="code-sandbox.svg" placeholder="Codesandbox e.g., Siddhant98" value={formData.codeSandBox} name={"codeSandBox"} onChange={handleChange} />
                        {errors.codeSandBox && <span className="errorMsg">{errors.codeSandBox}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="stackoverflow.png" placeholder="Stackoverflow e.g., Siddhant98" value={formData.stackOverflow} name={"stackOverflow"} onChange={handleChange} />
                        {errors.stackOverflow && <span className="errorMsg">{errors.stackOverflow}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="leetcode.svg" placeholder="Leetcode e.g., Siddhant98" value={formData.leetCode} name={"leetCode"} onChange={handleChange} />
                        {errors.leetCode && <span className="errorMsg">{errors.leetCode}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="behance.png" placeholder="Behance e.g., Siddhant98" value={formData.behance} name={"behance"} onChange={handleChange} />
                        {errors.behance && <span className="errorMsg">{errors.behance}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="facebook.png" placeholder="Facebook e.g., siddhant.kadam.583" value={formData.facebook} name={"facebook"} onChange={handleChange} />
                        {errors.facebook && <span className="errorMsg">{errors.facebook}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="instagram.png" placeholder="Instagram e.g., igl_elijah" value={formData.instagram} name={"instagram"} onChange={handleChange} />
                        {errors.instagram && <span className="errorMsg">{errors.instagram}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8 mb-6">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="youtube.png" placeholder="Youtube e.g., @elijah-game-zone" value={formData.youTube} name={"youTube"} onChange={handleChange} />
                        {errors.youTube && <span className="errorMsg">{errors.youTube}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="discord.png" placeholder="Discord e.g., igl_elijah" value={formData.discord} name={"discord"} onChange={handleChange} />
                        {errors.discord && <span className="errorMsg">{errors.discord}</span>}
                    </div>
                </div>

                {/* Additional features */}
                <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Additional features</h6>
                <hr />

                <ul className="mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid sm:grid-cols-3 sm:grid-rows-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {addOns.map((add) => (
                        <li key={add.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input
                                    id={`${add.id}-option`}
                                    type="checkbox"
                                    name="selectedAddOns"
                                    value={add.id}
                                    onChange={handleChange}
                                    checked={formData.selectedAddOns.includes(add.id)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label htmlFor={`${add.id}-option`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {add.label}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-3 gap-1 mt-5">
                    <div>
                        <div className="flex items-center gap-4">
                            <h6 className="font-semibold mt-3 mb-3 text-white">Select GIF:</h6>
                            <button type="button" onClick={prevGif}
                                style={{ borderRadius: "15px", border: "1px solid #81fdff", padding: "4px 8px", backgroundColor: "transparent", color: "#fff", fontWeight: "600" }}
                            >⏴</button>
                            {/* Selected GIF Display */}
                            <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-gray-300 shadow-md">
                                <img
                                    src={gifs[currentIndex].src}
                                    alt="gif"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button type="button"
                                onClick={nextGif}
                                style={{ borderRadius: "15px", border: "1px solid #81fdff", padding: "4px 8px", backgroundColor: "transparent", color: "#fff", fontWeight: "600" }}
                            >
                                ⏵
                            </button>
                            <button
                                onClick={clearGifSelection}
                                className="text-red-600 text-xl font-bold"
                                style={{ borderRadius: "5px", border: "1px solid red", padding: "0 4px", backgroundColor: "transparent", color: "red", fontWeight: "600" }} title="Clear GIF Selection"
                            >
                                ✖
                            </button>

                        </div>
                    </div>
                    <div>
                        <TextBox icon="gif.png" placeholder="Custom GIF e.g., ...computer.gif" value={formData.gifLink} name={"gifLink"} onChange={handleChange} />
                    </div>
                    <div>
                        <div className="flex" style={{ borderBottom: "2px solid #81fdff" }}>
                            <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <img src={`${process.env.PUBLIC_URL}/icons/description.png`} className="w-10 h-10" />
                            </span>
                            <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="quote" value={formData.quote} rows="6" cols="60" placeholder="Developer jokes/Random quotes" onChange={handleChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button type="submit" className="primary-button flex px-3 py-2 mt-5 font-semibold">
                        Select the template <img src={`${process.env.PUBLIC_URL}/icons/next.png`} className="w-5 h-5 ml-2 mt-1" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form;