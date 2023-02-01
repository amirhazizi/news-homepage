const menuBtn = document.querySelector(".nav-menubtn")
const closeBtn = document.querySelector(".sidebar-container-closebtn")
const sidebar = document.querySelector(".sidebar")
menuBtn.addEventListener("click", function () {
  sidebar.classList.add("active-sidebar")
})
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active-sidebar")
})
