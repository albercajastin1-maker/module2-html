console.log("JS Loaded");

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "Light Mode"
            : "Dark Mode";
});

// Toggle Skills
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", () => {
    skillsSection.classList.toggle("hidden");
});

// Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
        form.reset();
    }
});
