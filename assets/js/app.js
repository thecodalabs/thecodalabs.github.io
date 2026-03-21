const toggleBtn = document.getElementById("open-menu");
const sideBar = document.getElementById("sidebar");
const menuIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  if (sideBar.classList.contains("active")) {
    menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
});
