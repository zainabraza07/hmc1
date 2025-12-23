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
