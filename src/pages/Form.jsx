import { React, useState } from "react";
import TextBox from "../component/textBox/Text-box.jsx";
import { useNavigate } from 'react-router-dom';
import IconCheckbox from "../component/iconCheckbox/Icon-checkbox.jsx"

const allSkills = [{
    title: "Programming Languages",
    array: [
        { id: 'c', label: 'C', icon: '../icons/C_Language.png' },
        { id: 'cplus', label: 'C++', icon: '../icons/C_Plus.png' },
        { id: 'csharp', label: 'C#', icon: '../icons/c-sharp.png' }
    ]
},
{
    title: "Frontend Languages",
    array: [
        { id: 'react', label: 'React Js', icon: '../icons/react.png' },
        { id: 'vue', label: 'Vue Js', icon: '../icons/vue.png' },
        { id: 'angular', label: 'Angular', icon: '../icons/angular.png' }
    ]
}];

const addOns = [
    { id: 'count', label: 'Show visitor count badge' },
    { id: 'trophy', label: 'Display github trophy' },
    { id: 'stats', label: 'Display github profile stats card' },
    { id: 'skills', label: 'Highlight top skills' },
    { id: 'streak', label: 'Showcase GitHub streak statistics' },
    { id: 'twitter', label: 'Showcase Twitter handle badge' },
];

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
        articles: "",
        portfolio: "",
        resume: "",

        selectedSkills: [],
        selectedAddOns: [],
        gitHub: "",
        twitter: "",
        medium: "",
        codepen: "",
        linkdin: "",
        devTo: "",
        codeSandBox: "",
        stackOverflow: "",
        leetCode: "",
        behance: "",
        facebook: "",
        instagram: "",
        youTube: "",
        discord: "",
    });

    const navigate = useNavigate();

    const saveData = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate('/preview');
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
    };

    return (
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
                        <TextBox icon="right-arrow.png" placeholder="Enter your title" name={"title"} value={formData.title} onChange={handleChange} />
                    </div>
                    <div className="col-span-2">
                        <TextBox icon="user.png" placeholder="Enter your name" name={"name"} value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-span-3">
                        <TextBox icon="search.png" placeholder="Enter your work title" name={"workTitle"} value={formData.workTitle} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex mt-3 mb-4" style={{ borderBottom: "2px solid #81fdff" }}>
                    <span className="inline-flex items-center p-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src="../icons/user.png" className="w-10 h-10" />
                    </span>
                    <textarea className="border-class bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="aboutMe" value={formData.aboutMe} rows="6" cols="60" placeholder="About me..." onChange={handleChange}></textarea>
                </div>
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">About myself</h6>
            <hr></hr>

            {/* Current project */}
            <div className="grid grid-cols-3 gap-1 mt-3">
                <div>
                    <TextBox icon="contribution.png" placeholder="Currently I'm contributing in..." value={formData.currentProjectName} name={"currentProjectName"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="contribution.png" placeholder="Project link" value={formData.currentProjectLink} name={"currentProjectLink"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="contribution.png" placeholder="Project description" value={formData.currentProjectDecription} name={"currentProjectDecription"} onChange={handleChange} />
                </div>
            </div>

            {/* Collaborate project */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="interested.png" placeholder="I'm interested in contributing to..." value={formData.interestedProjectName} name={"interestedProjectName"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="interested.png" placeholder="Project link" value={formData.interestedProjectLink} name={"interestedProjectLink"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="interested.png" placeholder="Project description" value={formData.interestedProjectDescription} name={"interestedProjectDescription"} onChange={handleChange} />
                </div>
            </div>

            {/* Current learning */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="skill-development.png" placeholder="I'm building my skills in" value={formData.learningSkills} name={"learningSkills"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="network.png" placeholder="Feel free to reach out to me regarding" value={formData.skilledIn} name={"skilledIn"} onChange={handleChange} />
                </div>
            </div>

            {/* Connect with me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="email.png" placeholder="Connect with me here" value={formData.email} name={"email"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="article.png" placeholder="I frequently publish articles about" value={formData.articles} name={"articles"} onChange={handleChange} />
                </div>
            </div>

            {/* About me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="briefcase.png" placeholder="Take a look at my portfolio" value={formData.portfolio} name={"portfolio"} onChange={handleChange} />
                </div>
                <div>
                    <TextBox icon="personal-profile.png" placeholder="Here’s a summary of my professional experience" value={formData.resume} name={"resume"} onChange={handleChange} />
                </div>
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Skills</h6>
            <hr />

            {allSkills.map((skillCategory) => (
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
            ))};

            {/* Networking */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Networking</h6>
            <hr></hr>

            <div className="grid grid-cols-8 gap-8 mt-3">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="github.png" placeholder="GitHub" value={formData.gitHub} name={"gitHub"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="twitter.png" placeholder="Twitter" value={formData.twitter} name={"twitter"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="medium.png" placeholder="Medium" value={formData.medium} name={"medium"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="codepen.svg" placeholder="Codepen" value={formData.codepen} name={"codepen"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="linkedin.png" placeholder="LinkdIn" value={formData.linkdin} name={"linkdin"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="dev.png" placeholder="Dev.to" value={formData.devTo} name={"devTo"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="code-sandbox.svg" placeholder="Codesandbox" value={formData.codeSandBox} name={"codeSandBox"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="stackoverflow.png" placeholder="Stackoverflow" value={formData.stackOverflow} name={"stackOverflow"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="leetcode.svg" placeholder="Leetcode" value={formData.leetCode} name={"leetCode"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="behance.png" placeholder="Behance" value={formData.behance} name={"behance"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="facebook.png" placeholder="Facebook" value={formData.facebook} name={"facebook"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="instagram.png" placeholder="Instagram" value={formData.instagram} name={"instagram"} onChange={handleChange} />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="youtube.png" placeholder="Youtube" value={formData.youTube} name={"youTube"} onChange={handleChange} />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="discord.png" placeholder="Discord" value={formData.discord} name={"discord"} onChange={handleChange} />
                </div>
            </div>

            {/* Additional features */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Additional features</h6>
            <hr />

            {/* <ul className="mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {addOns.map((add) => (
                    <li key={add.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input id={`${add.id}-option`} type="checkbox" name={"selectedAddOns"} value={add.id} onChange={handleChange} checked={formData.selectedAddOns.includes(add.id)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{add.label}</label>
                        </div>
                    </li>
                ))};
            </ul> */}

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

    )
}

export default Form;