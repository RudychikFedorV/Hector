export function initializeDropdown() {
  document.addEventListener("DOMContentLoaded", function () {
    const arrowbtn = document.querySelector(".arrow-btn");
    const dropdownContent = document.querySelector(".dropdown-catalog");

    arrowbtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
      if (!event.target.matches(".arrow-btn")) {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });
  });
}
