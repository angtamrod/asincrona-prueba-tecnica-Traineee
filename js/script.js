 //1. Declaramos constantes
 const botones = document.querySelectorAll(".botones__div");

 const images = [
     './imgs/img1-reebok.webp',
     './imgs/img2-crema.webp',
     './imgs/img3-coche.webp',
     './imgs/img4-emotionalpulse.webp',
     './imgs/img5-cerveza.webp',
     './imgs/img6-actimel.webp',
     './imgs/img7-ffuus.webp',
     './imgs/img8-delicious.webp',
     './imgs/img9-roca.webp',
     './imgs/img10-deepstate.webp'
 ];

 const imagenFondo = document.querySelector(".imgfondo");

//2. Declaramos funciones
 botones.forEach((boton, index) => {
     let hiceHover = false;

     boton.addEventListener("mouseover", () => {
        hiceHover = true;
        imagenFondo.style.opacity = 1; 
        imagenFondo.style.backgroundImage = `url(${images[index]})`;
        
     });

     boton.addEventListener("mouseout", () => {
        hiceHover = false;
         imagenFondo.style.opacity = 0; 
     });
 });