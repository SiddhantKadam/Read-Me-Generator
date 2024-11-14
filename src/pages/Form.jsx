import React from "react";
import Card from "../component/card/Card";
import TextBox from "../component/textBox/Text-box.jsx";

const allSkills = [
    { id: 'react', label: 'React Js', icon: '../icons/react.png' },
    { id: 'vue', label: 'Vue Js', icon: '../icons/vue.png' },
    { id: 'angular', label: 'Angular', icon: '../icons/angular.png' },
    // Add more skills as needed
];

const Form = () => {
    return (
        <Card>
            <div className="flex justify-between items-center w-full">
                <h6 className="text-5xl mb-5 primary-color font-semibold">GitHub Profile README Generator</h6>
                <button className="primary-button flex pr-6 pl-3 py-2 font-semibold">
                    <img src={`../gifs/star.gif`} className="w-5 h-5 mr-2 mt-1" /> Star this repo
                </button>
            </div>
            <hr />

            <div className="grid grid-cols-2 gap-1 mt-3">
                <div className="grid grid-cols-3 gap-1">
                    <div>
                        <TextBox icon="right-arrow.png" title="Enter your title" />
                    </div>
                    <div className="col-span-2">
                        <TextBox icon="user.png" title="Enter your name" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-1">
                <TextBox icon="search.png" title="Enter your work title" />
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">About myself</h6>
            <hr></hr>

            {/* Current project */}
            <div className="grid grid-cols-3 gap-1 mt-3">
                <div>
                    <TextBox icon="contribution.png" title="Currently I'm contributing in..." />
                </div>
                <div>
                    <TextBox icon="contribution.png" title="Project name" />
                </div>
                <div>
                    <TextBox icon="contribution.png" title="Project description" />
                </div>
            </div>

            {/* Collaborate project */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="interested.png" title="I'm interested in contributing to..." />
                </div>
                <div>
                    <TextBox icon="interested.png" title="Project name" />
                </div>
                <div>
                    <TextBox icon="interested.png" title="Project description" />
                </div>
            </div>

            {/* Current learning */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="skill-development.png" title="I'm building my skills in" />
                </div>
                <div>
                    <TextBox icon="network.png" title="Feel free to reach out to me regarding" />
                </div>
            </div>

            {/* Connect with me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="email.png" title="Connect with me here" />
                </div>
                <div>
                    <TextBox icon="article.png" title="I frequently publish articles about" />
                </div>
            </div>

            {/* About me */}
            <div className="grid grid-cols-3 gap-1">
                <div>
                    <TextBox icon="briefcase.png" title="Take a look at my portfolio" />
                </div>
                <div>
                    <TextBox icon="personal-profile.png" title="Here’s a summary of my professional experience" />
                </div>
            </div>

            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Skills</h6>
            <hr></hr>

            <h3 class="my-3 text-lg font-medium text-gray-900 dark:text-white">Programming Languages:</h3>
            <ul className="grid w-full gap-10 md:grid-cols-6">
                {allSkills.map((skill) => (
                    <li key={skill.id}>
                        <input type="checkbox" id={`${skill.id}-option`} value="" className="hidden peer" required />
                        <label
                            htmlFor={`${skill.id}-option`}
                            className="flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img src={skill.icon} alt={`${skill.label} icon`} className="mb-2 w-7 h-7 text-sky-500" />
                                <div className="text-lg font-semibold text-center">{skill.label}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            {/* Frontend technologies */}
            <h3 class="my-3 text-lg font-medium text-gray-900 dark:text-white">Frontend technologies:</h3>
            <ul className="grid w-full gap-10 md:grid-cols-6">
                {allSkills.map((skill) => (
                    <li key={skill.id}>
                        <input type="checkbox" id={`${skill.id}-option`} value="" className="hidden peer" required />
                        <label
                            htmlFor={`${skill.id}-option`}
                            className="flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img src={skill.icon} alt={`${skill.label} icon`} className="mb-2 w-7 h-7 text-sky-500" />
                                <div className="text-lg font-semibold text-center">{skill.label}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            {/* Backend technologies */}
            <h3 class="my-3 text-lg font-medium text-gray-900 dark:text-white">Backend technologies:</h3>
            <ul className="grid w-full gap-10 md:grid-cols-6">
                {allSkills.map((skill) => (
                    <li key={skill.id}>
                        <input type="checkbox" id={`${skill.id}-option`} value="" className="hidden peer" required />
                        <label
                            htmlFor={`${skill.id}-option`}
                            className="flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img src={skill.icon} alt={`${skill.label} icon`} className="mb-2 w-7 h-7 text-sky-500" />
                                <div className="text-lg font-semibold text-center">{skill.label}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            {/* Mobile technologies */}
            <h3 class="my-3 text-lg font-medium text-gray-900 dark:text-white">Mobile App technologies:</h3>
            <ul className="grid w-full gap-10 md:grid-cols-6">
                {allSkills.map((skill) => (
                    <li key={skill.id}>
                        <input type="checkbox" id={`${skill.id}-option`} value="" className="hidden peer" required />
                        <label
                            htmlFor={`${skill.id}-option`}
                            className="flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img src={skill.icon} alt={`${skill.label} icon`} className="mb-2 w-7 h-7 text-sky-500" />
                                <div className="text-lg font-semibold text-center">{skill.label}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>

            {/* Networking */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Networking</h6>
            <hr></hr>

            <div className="grid grid-cols-8 gap-8 mt-3">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="github.png" title="GitHub" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="twitter.png" title="Twitter" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="medium.png" title="Medium" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="codepen.svg" title="Codepen" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="linkedin.png" title="LinkdIn" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="dev.png" title="Dev.to" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="code-sandbox.svg" title="Codesandbox" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="stackoverflow.png" title="Stackoverflow" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="leetcode.svg" title="Leetcode" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="behance.png" title="Behance" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="facebook.png" title="Facebook" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="instagram.png" title="Instagram" />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-8">
                <div className="col-start-2 col-end-5">
                    <TextBox icon="youtube.png" title="Youtube" />
                </div>
                <div className="col-start-5 col-span-3">
                    <TextBox icon="discord.png" title="Discord" />
                </div>
            </div>

            {/* Additional features */}
            <h6 className="primary-color font-semibold text-3xl mt-3 mb-3">Additional features</h6>
            <hr></hr>

            <ul class="mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show visitor count badge</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Display github trophy</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Display github profile stats card</label>
                    </div>
                </li>
            </ul>

            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Highlight top skills</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Showcase GitHub streak statistics</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Showcase Twitter handle badge</label>
                    </div>
                </li>
            </ul>


        </Card>

    )
}

export default Form;