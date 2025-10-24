const hardSkills = document.querySelectorAll(".hard-skill");

// Observador para detectar quando entra na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const skill = entry.target;
            skill.classList.add("visible");
            animateSkill(skill);
            observer.unobserve(skill); // Evita repetir animação
        }
    });
}, { threshold: 0.3 }); // 30% visível

hardSkills.forEach((skill) => observer.observe(skill));

function animateSkill(skill) {
    const target = Number(skill.getAttribute("data-value")) || 0;
    const fill = skill.querySelector(".progress-fill");
    const percentText = skill.querySelector(".hard-skill-percent");

    let counter = 0;
    const stepMs = 20;

    const interval = setInterval(() => {
        if (counter < target) {
            counter++;
            percentText.textContent = `${counter}%`;
            fill.style.width = `${counter}%`;
        } else {
            clearInterval(interval);
        }
    }, stepMs);
}
