const arrow = document.querySelectorAll(".arrow"),
    sidebar = document.querySelector(".sidebar"),
    sidebarBtn = document.querySelector(".bx-menu");

for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
        });
      }

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});