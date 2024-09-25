document.getElementById("hamburger").addEventListener("click", function () {
  showSectionById("side-bar");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("side-bar").classList.add("hidden");
});
