// Scroll reveal for all sections and cards
const elementsToShow = document.querySelectorAll("section, .trips-section .card, .team-section .card");

const revealOnScroll = () => {
  elementsToShow.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

// Trigger on load and scroll
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// Lightbox gallery
const images = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

const lightImg = document.createElement("img");
lightbox.appendChild(lightImg);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
