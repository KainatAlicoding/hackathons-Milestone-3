document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;
    const addEducationButton = document.getElementById("addEducation") as HTMLButtonElement;
    const addExperienceButton = document.getElementById("addExperience") as HTMLButtonElement;
    const educationSection = document.getElementById("educationSection") as HTMLDivElement;
    const experienceSection = document.getElementById("experienceSection") as HTMLDivElement;

    // Add event listeners
    form.addEventListener("submit", handleFormSubmit);
    addEducationButton.addEventListener("click", addEducationField);
    addExperienceButton.addEventListener("click", addExperienceField);

    // Functions
    function handleFormSubmit(event: Event) {
        event.preventDefault();
        
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');

        const educationInputs = document.querySelectorAll('.education-input');
        const experienceInputs = document.querySelectorAll('.experience-input');

        let education = [];
        let experience = [];

        educationInputs.forEach((input: Element) => {
            const institution = (input.querySelector('.institution') as HTMLInputElement).value;
            const degree = (input.querySelector('.degree') as HTMLInputElement).value;
            education.push({ institution, degree });
        });

        experienceInputs.forEach((input: Element) => {
            const company = (input.querySelector('.company') as HTMLInputElement).value;
            const role = (input.querySelector('.role') as HTMLInputElement).value;
            experience.push({ company, role });
        });

        renderResume(name, email, skills, education, experience);
    }

    function addEducationField() {
        const educationDiv = document.createElement("div");
        educationDiv.classList.add("education-input");
        educationDiv.innerHTML = `
            <label>Institution:</label>
            <input type="text" class="institution" required>
            <label>Degree:</label>
            <input type="text" class="degree" required>
        `;
        educationSection.insertBefore(educationDiv, addEducationButton);
    }

    function addExperienceField() {
        const experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-input");
        experienceDiv.innerHTML = `
            <label>Company:</label>
            <input type="text" class="company" required>
            <label>Role:</label>
            <input type="text" class="role" required>
        `;
        experienceSection.insertBefore(experienceDiv, addExperienceButton);
    }

    function renderResume(name: string, email: string, skills: string[], education: Array<{institution: string, degree: string}>, experience: Array<{company: string, role: string}>) {
        resumeDisplay.innerHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <h3>Skills</h3>
            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            <h3>Education</h3>
            ${education.map(ed => `<p>${ed.institution} - ${ed.degree}</p>`).join('')}
            <h3>Work Experience</h3>
            ${experience.map(exp => `<p>${exp.company} - ${exp.role}</p>`).join('')}
        `;
    }
});
