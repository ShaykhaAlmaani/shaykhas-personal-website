const grid = document.getElementById("projects-grid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" class="project-image" />
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;

  card.onclick = () => {
    modal.classList.add("active");

    modalContent.innerHTML = `
      <span class="close-modal" onclick="closeModal()">✕</span>
      <img src="${project.image}" />
      <h3>${project.title}</h3>
      <p>${project.details}</p>
    `;
  };

  grid.appendChild(card);
});

function closeModal() {
  modal.classList.remove("active");
}

/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
});

sections.forEach(s => observer.observe(s));