import "./aurora.css"

const Aurora = () => {
    const storedData = localStorage.getItem("formData");
    const formData = storedData ? JSON.parse(storedData) : {};

    return (
        `<div>
            <h1>I'm ${formData.title ? formData.title : ""} ${formData.name ? formData.name : ""}, ${formData.workTitle ? formData.workTitle : ""} </h1>
            ${formData.selectedAddOns.includes("count") && `<img src="https://komarev.com/ghpvc/?username=${formData.gitHub}&style=for-the-badge&label=Profile%20Views&labelColor=black&color=red" align="right" />`}

            <p style="color: red;">${formData.aboutMe ? formData.aboutMe : ""}</p>

            ${(formData.email || formData.twitter || formData.youtube || formData.instagram || formData.facebook) ? `
            <p>
            ${formData.email ? `<a href={mailto:${formData.email}} target="blank"><img src="https://img.shields.io/badge/Email-%23c71610?style=for-the-badge&logo=gmail&logoColor=white" /></a>` : ""}
            ${formData.twitter ? `<a href=https://x.com/${formData.twitter} target="blank"><img src="https://img.shields.io/badge/Twitter-black?style=for-the-badge&logo=x&logoColor=white" /></a>` : ""}
            ${formData.youtube ? `<a href=https://www.youtube.com/${formData.youtube} target="blank"><img src="https://img.shields.io/badge/Youtube-%23FF0000?style=for-the-badge&logo=youtube&logoColor=white" /></a>` : ""}
            ${formData.instagram ? `<a href=https://www.instagram.com/${formData.instagram} target="blank"><img src="https://img.shields.io/badge/Instagram-%23d62976?style=for-the-badge&logo=instagram&logoColor=white" /></a>` : ""}
            ${formData.facebook ? `<a href=https://www.facebook.com/${formData.facebook} target="blank"><img src="https://img.shields.io/badge/Facebook-%23316FF6?style=for-the-badge&logo=facebook&logoColor=white" /></a>` : ""}
            </p> ` : ""}

            ${formData.selectedAddOns.includes("trophy") ? `<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=siddhantkadam" alt="siddhantkadam" /></a> </p> ` : "" }

            <hr />

            <img align="right" style="width: 250px" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXF1cTNwbWU3MzRsa3dybWV0ZmRyaG9mYW1qdTVkY2Nncmtud3ZzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif" />

            ${(formData.currentProjectName || formData.currentProjectLink) ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                ${formData.currentProjectName ? `<img src="https://img.shields.io/badge/Currently_working_on_${formData.currentProjectName}-black?style=for-the-badge&color=%230d1117" />` : ""}
                ${formData.currentProjectLink ? `<a href="${formData.currentProjectLink}" target="blank">
            <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
        </a>` : ""}
            </p>
            `: ""}

            ${(formData.interestedProjectName || formData.interestedProjectLink) ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                ${formData.interestedProjectName ? `<img src="https://img.shields.io/badge/Interested_to_work_on_${formData.interestedProjectName}-black?style=for-the-badge&color=%230d1117" />` : ""}
                ${formData.interestedProjectLink ? `<a href="${formData.interestedProjectLink}" target="blank">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>` : ""}
            </p>
            `: ""}

            ${formData.learningSkills ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Learning_${formData.learningSkills}-black?style=for-the-badge&color=%230d1117" />
            </p>` : ""}

            ${formData.skilledIn ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Skilled_in_${formData.skilledIn}-black?style=for-the-badge&color=%230d1117" />
            </p>` : ""}

            ${formData.portfolio ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/My_Portfolio-black?style=for-the-badge&color=%230d1117" />
                <a href="${formData.portfolio}" target="blank">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>
            </p>` : ""}

            ${formData.resume ? `
            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Resume-black?style=for-the-badge&color=%230d1117" />
                <a href="${formData.resume}" target="blank">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>
            </p>` : ""}

            <hr />

            <h3 align="left">Feel free to reach out:</h3>
            <p align="left">
            ${formData.linkdin ? `<a href="https://linkedin.com/in/linkedin.com/in/${formData.linkdin}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/linkedin.png?raw=true" alt="linkedin" height="40" width="40" /></a>` : ""}
            ${formData.codepen ? `<a href="https://codepen.com/${formData.codepen}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/codepen.svg?raw=true" alt="codepen" height="40" width="40" /></a>` : ""}
            ${formData.medium ? `<a href="https://medium.com/${formData.medium} ? " target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/medium.png?raw=true" alt="medium" height="40" width="40" /></a>` : ""}
            ${formData.devTo ? `<a href="https://devTo.com/${formData.devTo}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/dev.png?raw=true" alt="dev" height="40" width="40" /></a>` : ""}
            ${formData.codeSandBox ? `<a href="https://codeSandBox.com/${formData.codeSandBox}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/code-sandbox.svg?raw=true" alt="code-sandbox" height="40" width="40" /></a>` : ""}
            ${formData.stackOverflow ? `<a href="https://stackOverflow.com/${formData.stackOverflow}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/stackoverflow.png?raw=true" alt="stackoverflow" height="40" width="40" /></a>` : ""}
            ${formData.leetCode ? `<a href="https://leetCode.com/${formData.leetCode}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/leetcode.svg?raw=true" alt="leetcode" height="40" width="40" /></a>` : ""}
            ${formData.behance ? `<a href="https://behance.com/${formData.behance}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/behance.png?raw=true" alt="behance" height="40" width="40" /></a>` : ""}
            ${formData.discord ? `<a href="https://discord.com/${formData.discord}" target="blank"><img align="center" src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/discord.png?raw=true" alt="discord" height="40" width="40" /></a>` : ""}
            </p>

            <h3 align="left">Languages and Tools:</h3>
            <p align="left">  
            ${formData.selectedSkills.map((skill) => (
            `<img src="https://github.com/SiddhantKadam/Read-Me-Generator/blob/main/public/icons/${skill}.png?raw=true" alt="${skill}" width="40" height="40" />`
        ))}
            </p>
            <hr />

            <p>
            ${formData.selectedAddOns.includes("skills") ? `<img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${formData.gitHub}&show_icons=true&locale=en&layout=compact" alt="${formData.gitHub}" />` : ""}

            ${formData.selectedAddOns.includes("stats") ? `<img align="center" src="https://github-readme-stats.vercel.app/api?username=${formData.gitHub}&show_icons=true&locale=en" alt="${formData.gitHub}" />` : ""}

            ${formData.selectedAddOns.includes("streak") ? `<img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${formData.gitHub}&" alt="${formData.gitHub}" />` : ""}
            </p> 
        </div>`
    )
}

export default Aurora;
