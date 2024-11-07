document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeDisplay = document.getElementById("resumeDisplay");
    var addEducationButton = document.getElementById("addEducation");
    var addExperienceButton = document.getElementById("addExperience");
    var educationSection = document.getElementById("educationSection");
    var experienceSection = document.getElementById("experienceSection");
    // Add event listeners
    form.addEventListener("submit", handleFormSubmit);
    addEducationButton.addEventListener("click", addEducationField);
    addExperienceButton.addEventListener("click", addExperienceField);
    // Functions
    function handleFormSubmit(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var skills = document.getElementById("skills").value.split(',');
        var educationInputs = document.querySelectorAll('.education-input');
        var experienceInputs = document.querySelectorAll('.experience-input');
        var education = [];
        var experience = [];
        educationInputs.forEach(function (input) {
            var institution = input.querySelector('.institution').value;
            var degree = input.querySelector('.degree').value;
            education.push({ institution: institution, degree: degree });
        });
        experienceInputs.forEach(function (input) {
            var company = input.querySelector('.company').value;
            var role = input.querySelector('.role').value;
            experience.push({ company: company, role: role });
        });
        renderResume(name, email, skills, education, experience);
    }
    function addEducationField() {
        var educationDiv = document.createElement("div");
        educationDiv.classList.add("education-input");
        educationDiv.innerHTML = "\n            <label>Institution:</label>\n            <input type=\"text\" class=\"institution\" required>\n            <label>Degree:</label>\n            <input type=\"text\" class=\"degree\" required>\n        ";
        educationSection.insertBefore(educationDiv, addEducationButton);
    }
    function addExperienceField() {
        var experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-input");
        experienceDiv.innerHTML = "\n            <label>Company:</label>\n            <input type=\"text\" class=\"company\" required>\n            <label>Role:</label>\n            <input type=\"text\" class=\"role\" required>\n        ";
        experienceSection.insertBefore(experienceDiv, addExperienceButton);
    }
    function renderResume(name, email, skills, education, experience) {
        resumeDisplay.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <h3>Skills</h3>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n            <h3>Education</h3>\n            ").concat(education.map(function (ed) { return "<p>".concat(ed.institution, " - ").concat(ed.degree, "</p>"); }).join(''), "\n            <h3>Work Experience</h3>\n            ").concat(experience.map(function (exp) { return "<p>".concat(exp.company, " - ").concat(exp.role, "</p>"); }).join(''), "\n        ");
    }
});
