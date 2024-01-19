window.addEventListener("scroll", function() {
    const menu = document.getElementById("menu");
    const scrollY = window.scrollY;
  
    if (scrollY > 100) { // Cambia 100 según tu preferencia
      menu.classList.add("fixed-menu");
    } else {
      menu.classList.remove("fixed-menu");
    }
  });
  