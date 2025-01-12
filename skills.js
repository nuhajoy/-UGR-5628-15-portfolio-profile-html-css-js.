// Image hover effect
document.querySelectorAll("section img").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.3s";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});


