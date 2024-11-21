import "./aurora.css"

const Aurora = () => {
    const storedData = localStorage.getItem("formData");
    const formData = storedData ? JSON.parse(storedData) : {};

    return (
        `<div>
            <h1>I'm ${formData.title ? formData.title : ""} ${formData.name ? formData.name : ""}, a ${formData.workTitle ? formData.workTitle : ""} </h1>
            <img src="https://komarev.com/ghpvc/?username=${formData.gitHub}&style=for-the-badge&label=Profile%20Views&labelColor=black&color=red" align="right" />

            <p style="color: red;">${formData.workTitle ? formData.workTitle : "" }</p>

            <p>
            ${formData.email ? <img src={"https://img.shields.io/badge/Email-%23c71610?style=for-the-badge&logo=gmail&logoColor=white"} /> : ""}
            ${formData.twitter ? <img src="https://img.shields.io/badge/Twitter-black?style=for-the-badge&logo=x&logoColor=white" /> : ""}
            ${formData.youtube ? <img src="https://img.shields.io/badge/Youtube-%23FF0000?style=for-the-badge&logo=youtube&logoColor=white" /> : ""}
            ${formData.instagram ? <img src="https://img.shields.io/badge/Instagram-%23d62976?style=for-the-badge&logo=instagram&logoColor=white" /> : ""}
            ${formData.facebook ? <img src="https://img.shields.io/badge/Facebook-%23316FF6?style=for-the-badge&logo=facebook&logoColor=white" /> : ""}
            ${formData.discord ? <img src="https://img.shields.io/badge/Discord-%237289DA?style=for-the-badge&logo=discord&logoColor=white" /> : ""}
            </p>

            ${formData.email ? <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=siddhantkadam" alt="siddhantkadam" /></a> </p> : ""}

            <hr />

            <img align="right" style="width: 250px" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXF1cTNwbWU3MzRsa3dybWV0ZmRyaG9mYW1qdTVkY2Nncmtud3ZzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif" />

            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                ${formData.currentProjectName ? <img src={`https://img.shields.io/badge/Currently_working_on_${formData.currentProjectName}-black?style=for-the-badge&color=%230d1117`} /> : ""}
                ${formData.currentProjectLink ? <a href="https://medium.com/@siddhantk951">
            <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
        </a> : ""}
            </p>


            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Interested_to_work_on_Customer_Portal-black?style=for-the-badge&color=%230d1117" />
                <a href="https://medium.com/@siddhantk951">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>
            </p>

            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Learning_ReactJS-black?style=for-the-badge&color=%230d1117" />
            </p>

            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Skilled_in_Angular,_Javascript-black?style=for-the-badge&color=%230d1117" />
            </p>

            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/My_Portfolio-black?style=for-the-badge&color=%230d1117" />
                <a href="https://medium.com/@siddhantk951">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>
            </p>

            <p>
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-right-icon.png" style="width: 30px;" />
                <img src="https://img.shields.io/badge/Resume-black?style=for-the-badge&color=%230d1117" />
                <a href="https://medium.com/@siddhantk951">
                    <img src="https://img.shields.io/badge/Check_here-blue?style=for-the-badge" style="width: 90px" />
                </a>
            </p>

            <hr />

            <h3 align="left">Feel free to reach out:</h3>
            <p align="left">
                <a href="https://twitter.com/siddhantk98" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="siddhantk98" height="30" width="40" /></a>
                <a href="https://linkedin.com/in/linkedin.com/in/siddhant-kadam-2883821a1" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="linkedin.com/in/siddhant-kadam-2883821a1" height="30" width="40" /></a>
                <a href="https://instagram.com/igl_elijah" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="igl_elijah" height="30" width="40" /></a>
                <a href="https://medium.com/@siddhantk951" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@siddhantk951" height="30" width="40" /></a>
            </p>

            <h3 align="left">Languages and Tools:</h3>
            <p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" /> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /> </a> </p>
            <hr />

            <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=siddhantkadam&show_icons=true&locale=en&layout=compact" alt="siddhantkadam" />

                <img align="center" src="https://github-readme-stats.vercel.app/api?username=siddhantkadam&show_icons=true&locale=en" alt="siddhantkadam" />

                <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=siddhantkadam&" alt="siddhantkadam" /></p>
        </div>`
    )
}

export default Aurora;
