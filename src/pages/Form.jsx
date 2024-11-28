import { React, useState, useEffect } from "react";
import TextBox from "../component/textBox/Text-box.jsx";
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

        articles: "",
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
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    // State for search query
    const [searchQuery, setSearchQuery] = useState("");

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
        if (validate()) {
            localStorage.removeItem("formData");
            localStorage.setItem("formData", JSON.stringify(formData));
            setMessage("success");
            setTimeout(() => {
                navigate('/preview');
            }, 1000)
        } else {
            console.log('Form validation failed');
        }
    };

    // Validation logic
    const validate = () => {
        let formIsValid = true;
        let newErrors = { ...errors };

        // Title validation (must be "Mr." or "Ms.")
        if (formData.title?.trim().length > 5) {
            formIsValid = false;
            newErrors.title = 'Maximun 5 characters allowed';
        }

        // Name validation (must have at least 3 characters)
        if (!formData.name?.trim()) {
            formIsValid = false;
            newErrors.name = 'Name is required';
        } else if ((formData.name?.trim().length < 3) && (formData.name?.trim().length > 20)) {
            formIsValid = false;
            newErrors.name = 'Minimum 3 & Maximun 20 characters allowed';
        }

        if (!formData.workTitle?.trim()) {
            formIsValid = false;
            newErrors.workTitle = 'Work title is required';
        } else if ((formData.workTitle?.trim().length < 3) && (formData.workTitle?.trim().length > 50)) {
            formIsValid = false;
            newErrors.workTitle = 'Minimum 3 & Maximun 50 characters allowed';
        }

        if (formData.aboutMe?.trim().length > 500) {
            formIsValid = false;
            newErrors.aboutMe = 'Maximun 500 characters allowed';
        }

        // Current Project
        if ((formData.currentProjectName) && (/[^a-zA-Z\s]/.test(formData.currentProjectName))) {
            formIsValid = false;
            newErrors.currentProjectName = 'Special characters not allowed';
        } else if (formData.currentProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectName = 'Maximun 50 characters allowed';
        }

        if ((formData.currentProjectLink) && (!urlRegex.test(formData.currentProjectLink))) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Invalid URL';
        } else if (formData.currentProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.currentProjectLink = 'Maximun 50 characters allowed';
        }

        if (formData.currentProjectDecription?.trim().length > 100) {
            formIsValid = false;
            newErrors.currentProjectDecription = 'Maximun 100 characters allowed';
        }

        // Interested Project
        if ((formData.interestedProjectName) && (/[^a-zA-Z\s]/.test(formData.interestedProjectName))) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Special characters not allowed';
        } else if (formData.interestedProjectName?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectName = 'Maximun 50 characters allowed';
        }

        if ((formData.interestedProjectLink) && (!urlRegex.test(formData.interestedProjectLink))) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Invalid URL';
        } else if (formData.interestedProjectLink?.trim().length > 50) {
            formIsValid = false;
            newErrors.interestedProjectLink = 'Maximun 50 characters allowed';
        }

        if (formData.interestedProjectDescription?.trim().length > 100) {
            formIsValid = false;
            newErrors.interestedProjectDescription = 'Maximun 100 characters allowed';
        }

        // Learning Skills
        if (formData.learningSkills?.trim()) {
            const input = formData.learningSkills.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.learningSkills = 'Only 5 skills allowed';
            }
        } else if (formData.learningSkills?.trim().length > 50) {
            formIsValid = false;
            newErrors.learningSkills = 'Maximun 50 characters allowed';
        }

        // Skilled In
        if (formData.skilledIn?.trim()) {
            const input = formData.skilledIn.trim();
            const commaCount = (input.match(/,/g) || []).length;
            if (commaCount > 4) {
                formIsValid = false;
                newErrors.skilledIn = 'Only 5 skills allowed';
            }
        } else if (formData.skilledIn?.trim().length > 50) {
            formIsValid = false;
            newErrors.skilledIn = 'Maximun 50 characters allowed';
        }

        // Email
        if ((formData.email) && (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))) {
            formIsValid = false;
            newErrors.email = 'Invalid EmailID';
        } else if (formData.email?.trim().length > 50) {
            formIsValid = false;
            newErrors.email = 'Maximun 50 characters allowed';
        }

        // Twitter
        if (formData.twitter?.trim().length > 50) {
            formIsValid = false;
            newErrors.twitter = 'Maximun 50 characters allowed';
        }

        // facebook
        if (formData.facebook?.trim().length > 50) {
            formIsValid = false;
            newErrors.facebook = 'Maximun 50 characters allowed';
        }

        // instagram
        if (formData.instagram?.trim().length > 50) {
            formIsValid = false;
            newErrors.instagram = 'Maximun 50 characters allowed';
        }

        // youTube
        if (formData.youTube?.trim().length > 50) {
            formIsValid = false;
            newErrors.youTube = 'Maximun 50 characters allowed';
        }

        // articles
        if ((formData.articles) && (!urlRegex.test(formData.articles))) {
            formIsValid = false;
            newErrors.articles = 'Invalid URL';
        } else if (formData.articles?.trim().length > 50) {
            formIsValid = false;
            newErrors.articles = 'Maximun 50 characters allowed';
        }

        // portfolio
        if ((formData.portfolio) && (!urlRegex.test(formData.portfolio))) {
            formIsValid = false;
            newErrors.portfolio = 'Invalid URL';
        } else if (formData.portfolio?.trim().length > 50) {
            formIsValid = false;
            newErrors.portfolio = 'Maximun 50 characters allowed';
        }

        // resume
        if ((formData.resume) && (!urlRegex.test(formData.resume))) {
            formIsValid = false;
            newErrors.resume = 'Invalid URL';
        } else if (formData.resume?.trim().length > 50) {
            formIsValid = false;
            newErrors.resume = 'Maximun 50 characters allowed';
        }

        // GitHub
        if (!formData.gitHub?.trim()) {
            formIsValid = false;
            newErrors.gitHub = 'Github is required';
        } else if (formData.gitHub?.trim().length > 50) {
            formIsValid = false;
            newErrors.gitHub = 'Maximun 50 characters allowed';
        }

        // linkdin
        if (formData.linkdin?.trim().length > 50) {
            formIsValid = false;
            newErrors.linkdin = 'Maximun 50 characters allowed';
        }

        // medium
        if (formData.medium?.trim().length > 50) {
            formIsValid = false;
            newErrors.medium = 'Maximun 50 characters allowed';
        }

        // codepen
        if (formData.codepen?.trim().length > 50) {
            formIsValid = false;
            newErrors.codepen = 'Maximun 50 characters allowed';
        }

        // devTo
        if (formData.devTo?.trim().length > 50) {
            formIsValid = false;
            newErrors.devTo = 'Maximun 50 characters allowed';
        }

        // codeSandBox
        if (formData.codeSandBox?.trim().length > 50) {
            formIsValid = false;
            newErrors.codeSandBox = 'Maximun 50 characters allowed';
        }

        // stackOverflow
        if (formData.stackOverflow?.trim().length > 50) {
            formIsValid = false;
            newErrors.stackOverflow = 'Maximun 50 characters allowed';
        }

        // leetCode
        if (formData.leetCode?.trim().length > 50) {
            formIsValid = false;
            newErrors.leetCode = 'Maximun 50 characters allowed';
        }

        // behance
        if (formData.behance?.trim().length > 50) {
            formIsValid = false;
            newErrors.behance = 'Maximun 50 characters allowed';
        }

        // discord
        if (formData.discord?.trim().length > 50) {
            formIsValid = false;
            newErrors.discord = 'Maximun 50 characters allowed';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        setFormData((prevData) => {

            // Selected Skills
            if (name === "selectedSkills") {
                const updatedSkills = checked
                    ? [...prevData.selectedSkills, value] // Add skill
                    : prevData.selectedSkills.filter((id) => id !== value); // Remove skill

                return { ...prevData, selectedSkills: updatedSkills };
            }

            // Add Ons
            if (name === "selectedAddOns") {
                const updatedAddOns = checked
                    ? [...prevData.selectedAddOns, value] // Add skill
                    : prevData.selectedAddOns.filter((id) => id !== value); // Remove skill

                return { ...prevData, selectedAddOns: updatedAddOns };
            }

            return { ...prevData, [name]: value };
        });

        // Clear error message when user starts typing
        if (value.trim()) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    return (
        <div>
            <Toaster message={message} />
            <form onSubmit={saveData}>
                <div className="flex justify-between items-center w-full">
                    <h6 className="text-5xl mb-5 primary-color font-semibold">GitHub Profile README Generator</h6>
                    <button className="primary-button flex pr-6 pl-3 py-2 font-semibold">
                        <img src={`../gifs/star.gif`} className="w-5 h-5 mr-2 mt-1" /> Star this repo
                    </button>
                </div>
                <hr />

                <div className="grid grid-cols-2 gap-1 mt-3">
                    <div className="grid grid-cols-3">
                        <div>
                            <TextBox icon="right-arrow.png" placeholder="Enter title, e.g., Mr., Ms." name={"title"} value={formData.title} onChange={handleChange} />
                            {errors.title && <span style={{ color: '#fff' }}>{errors.title}</span>}
                        </div>
                        <div className="col-span-2">
                            <TextBox icon="user.png" placeholder="Enter your name" name={"name"} value={formData.name} onChange={handleChange} />
                            {errors.name && <span style={{ color: '#fff' }}>{errors.name}</span>}
                        </div>
                        <div className="col-span-3">
                            <TextBox icon="search.png" placeholder="Enter your work title" name={"workTitle"} value={formData.workTitle} onChange={handleChange} />
                            {errors.workTitle && <span style={{ color: '#fff' }}>{errors.workTitle}</span>}
                        </div>
                    </div>
                    <div className="flex mt-7" style={{ borderBottom: "2px solid #81fdff" }}>
                        <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <img src="../icons/info.png" className="w-10 h-10" />
                        </span>
                        <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="aboutMe" value={formData.aboutMe} rows="6" cols="60" placeholder="About me..." onChange={handleChange}></textarea>
                        {errors.aboutMe && <span style={{ color: '#fff' }}>{errors.aboutMe}</span>}
                    </div>
                </div>

                <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">About myself</h6>
                <hr></hr>

                {/* Current project */}
                <div className="grid grid-cols-3 gap-1 mt-3">
                    <div>
                        <TextBox icon="contribution.png" placeholder="Currently I'm contributing in e.g, Project name" value={formData.currentProjectName} name={"currentProjectName"} onChange={handleChange} />
                        {errors.currentProjectName && <span style={{ color: '#fff' }}>{errors.currentProjectName}</span>}
                    </div>
                    <div>
                        <TextBox icon="contribution.png" placeholder="Project link e.g, www.chatbot.com" value={formData.currentProjectLink} name={"currentProjectLink"} onChange={handleChange} />
                        {errors.currentProjectLink && <span style={{ color: '#fff' }}>{errors.currentProjectLink}</span>}
                    </div>
                    <div>
                        <TextBox icon="contribution.png" placeholder="Project description" value={formData.currentProjectDecription} name={"currentProjectDecription"} onChange={handleChange} />
                        {errors.currentProjectDecription && <span style={{ color: '#fff' }}>{errors.currentProjectDecription}</span>}
                    </div>
                </div>

                {/* Collaborate project */}
                <div className="grid grid-cols-3 gap-1">
                    <div>
                        <TextBox icon="interested.png" placeholder="I'm interested in contributing to e.g, Project name" value={formData.interestedProjectName} name={"interestedProjectName"} onChange={handleChange} />
                        {errors.interestedProjectName && <span style={{ color: '#fff' }}>{errors.interestedProjectName}</span>}
                    </div>
                    <div>
                        <TextBox icon="interested.png" placeholder="Project link e.g, www.facebook.com" value={formData.interestedProjectLink} name={"interestedProjectLink"} onChange={handleChange} />
                        {errors.interestedProjectLink && <span style={{ color: '#fff' }}>{errors.interestedProjectLink}</span>}
                    </div>
                    <div>
                        <TextBox icon="interested.png" placeholder="Project description" value={formData.interestedProjectDescription} name={"interestedProjectDescription"} onChange={handleChange} />
                        {errors.interestedProjectDescription && <span style={{ color: '#fff' }}>{errors.interestedProjectDescription}</span>}
                    </div>
                </div>

                {/* Current learning */}
                <div className="grid grid-cols-3 gap-1">
                    <div>
                        <TextBox icon="skill-development.png" placeholder="I'm building my skills in e.g, Java" value={formData.learningSkills} name={"learningSkills"} onChange={handleChange} />
                        {errors.learningSkills && <span style={{ color: '#fff' }}>{errors.learningSkills}</span>}
                    </div>
                    <div>
                        <TextBox icon="network.png" placeholder="Feel free to reach out to me regarding e.g., Python, ReactJS" value={formData.skilledIn} name={"skilledIn"} onChange={handleChange} />
                        {errors.skilledIn && <span style={{ color: '#fff' }}>{errors.skilledIn}</span>}
                    </div>
                </div>

                {/* Connect with me */}
                <div className="grid grid-cols-3 gap-1">
                    <div>
                        <TextBox icon="email.png" placeholder="Connect with me here e.g., siddhantk951@gmail.com" value={formData.email} name={"email"} onChange={handleChange} />
                        {errors.email && <span style={{ color: '#fff' }}>{errors.email}</span>}
                    </div>
                    <div>
                        <TextBox icon="article.png" placeholder="I frequently publish articles about e.g., www.medium.com/@siddhantk951" value={formData.articles} name={"articles"} onChange={handleChange} />
                        {errors.articles && <span style={{ color: '#fff' }}>{errors.articles}</span>}
                    </div>
                </div>

                {/* About me */}
                <div className="grid grid-cols-3 gap-1">
                    <div>
                        <TextBox icon="briefcase.png" placeholder="Take a look at my portfolio e.g., www.siddhantportfolio.site" value={formData.portfolio} name={"portfolio"} onChange={handleChange} />
                        {errors.portfolio && <span style={{ color: '#fff' }}>{errors.portfolio}</span>}
                    </div>
                    <div>
                        <TextBox icon="personal-profile.png" placeholder="Here’s a summary of my professional experience e.g., www.siddhantresume.site" value={formData.resume} name={"resume"} onChange={handleChange} />
                        {errors.resume && <span style={{ color: '#fff' }}>{errors.resume}</span>}
                    </div>
                </div>

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

                {filteredSkills.map((skillCategory) => (
                    skillCategory.array.length > 0 && (
                        <div key={skillCategory.title} className="mt-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{skillCategory.title}:</h3>
                            <ul className="grid w-full gap-10 md:grid-cols-6">
                                {skillCategory.array.map((skill) => (
                                    <li key={skill.id}>
                                        <IconCheckbox id={`${skill.id}-option`} name={"selectedSkills"} value={skill.id} onChange={handleChange} icon={skill.icon} checked={formData.selectedSkills.includes(skill.id)} label={skill.label} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                ))};

                {/* Networking */}
                <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Networking</h6>
                <hr></hr>

                <div className="grid grid-cols-8 gap-8 mt-3">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="github.png" placeholder="GitHub e.g., SiddhantKadam" value={formData.gitHub} name={"gitHub"} onChange={handleChange} />
                        {errors.gitHub && <span style={{ color: '#fff' }}>{errors.gitHub}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="twitter.png" placeholder="Twitter e.g., siddhantk98" value={formData.twitter} name={"twitter"} onChange={handleChange} />
                        {errors.twitter && <span style={{ color: '#fff' }}>{errors.twitter}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="medium.png" placeholder="Medium e.g., @siddhantk951" value={formData.medium} name={"medium"} onChange={handleChange} />
                        {errors.medium && <span style={{ color: '#fff' }}>{errors.medium}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="codepen.svg" placeholder="Codepen e.g., Siddhant98" value={formData.codepen} name={"codepen"} onChange={handleChange} />
                        {errors.codepen && <span style={{ color: '#fff' }}>{errors.codepen}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="linkedin.png" placeholder="LinkdIn e.g., siddhant-kadam-2883821a1" value={formData.linkdin} name={"linkdin"} onChange={handleChange} />
                        {errors.linkdin && <span style={{ color: '#fff' }}>{errors.linkdin}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="dev.png" placeholder="Dev.to e.g., Siddhant98" value={formData.devTo} name={"devTo"} onChange={handleChange} />
                        {errors.devTo && <span style={{ color: '#fff' }}>{errors.devTo}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="code-sandbox.svg" placeholder="Codesandbox e.g., Siddhant98" value={formData.codeSandBox} name={"codeSandBox"} onChange={handleChange} />
                        {errors.codeSandBox && <span style={{ color: '#fff' }}>{errors.codeSandBox}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="stackoverflow.png" placeholder="Stackoverflow e.g., Siddhant98" value={formData.stackOverflow} name={"stackOverflow"} onChange={handleChange} />
                        {errors.stackOverflow && <span style={{ color: '#fff' }}>{errors.stackOverflow}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="leetcode.svg" placeholder="Leetcode e.g., Siddhant98" value={formData.leetCode} name={"leetCode"} onChange={handleChange} />
                        {errors.leetCode && <span style={{ color: '#fff' }}>{errors.leetCode}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="behance.png" placeholder="Behance e.g., Siddhant98" value={formData.behance} name={"behance"} onChange={handleChange} />
                        {errors.behance && <span style={{ color: '#fff' }}>{errors.behance}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="facebook.png" placeholder="Facebook e.g., siddhant.kadam.583" value={formData.facebook} name={"facebook"} onChange={handleChange} />
                        {errors.facebook && <span style={{ color: '#fff' }}>{errors.facebook}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="instagram.png" placeholder="Instagram e.g., igl_elijah" value={formData.instagram} name={"instagram"} onChange={handleChange} />
                        {errors.instagram && <span style={{ color: '#fff' }}>{errors.instagram}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-8">
                    <div className="col-start-2 col-end-5">
                        <TextBox icon="youtube.png" placeholder="Youtube e.g., @elijah-game-zone" value={formData.youTube} name={"youTube"} onChange={handleChange} />
                        {errors.youTube && <span style={{ color: '#fff' }}>{errors.youTube}</span>}
                    </div>
                    <div className="col-start-5 col-span-3">
                        <TextBox icon="discord.png" placeholder="Discord e.g., igl_elijah" value={formData.discord} name={"discord"} onChange={handleChange} />
                        {errors.discord && <span style={{ color: '#fff' }}>{errors.discord}</span>}
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


                <div className="flex justify-center items-center">
                    <button type="submit" className="primary-button flex px-3 py-2 mt-5 font-semibold">
                        Select the template <img src={`../icons/next.png`} className="w-5 h-5 ml-2 mt-1" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form;