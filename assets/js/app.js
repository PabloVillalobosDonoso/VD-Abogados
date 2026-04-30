document.addEventListener("DOMContentLoaded", function(){

    // SCROLL SUAVE CON EL NAVBAR
    const links = document.querySelectorAll('.nav-link, .navbar-brand');

    links.forEach(link => {

      link.addEventListener('click', function(e){

        const targetId = this.getAttribute('href');

        if(targetId.startsWith('#')){

          e.preventDefault();

          const target = document.querySelector(targetId);

          if(target){
            target.scrollIntoView({
            behavior:'smooth'
          });
          }
        }
      });
    });

    //BOTON SUBIR
    const btnTop = document.getElementById("btnTop");
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300){
        btnTop.style.display = "flex";
      } else {
        btnTop.style.display = "none";
      }
    });

    btnTop.addEventListener("click",() => {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    });

});
