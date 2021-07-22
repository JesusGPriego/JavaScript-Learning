/* Vars */
const sidebarToggler = document.querySelector(".sidebar-toggle");

const sidebarCloser = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

/* Adding event listeners */

sidebarToggler.addEventListener("click", toggleSidebar);
sidebarCloser.addEventListener("click", toggleSidebar);

/* Functons */

function toggleSidebar() {
  /*  if (!sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.add("show-sidebar");
  } else {
    sidebar.classList.remove("show-sidebar");
  } */
  sidebar.classList.toggle("show-sidebar");
}
