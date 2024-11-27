export const validationData = (formData, errors, setErrors) => {
    const urlRegex = /^https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(?:\/[^\s]*)?(?:\?[a-zAZ0-9&=_-]+)*$/;

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
}
