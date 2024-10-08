// script.js
const container = document.querySelector('.home');
const mountain = document.querySelector('.parallax-item-mountain');
const background = document.querySelector('.parallax-item-background');
const titleh1 = document.querySelector('.parallax-title-h1'); // Selecciona los elementos de título
const titleh2 = document.querySelector('.parallax-title-h2');
container.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const offsetX = (mouseX / window.innerWidth - 0.5) * 30;
    const offsetY = (mouseY / window.innerHeight - 0.5) * 30;
    
    mountain.style.transform = `translateX(${offsetX}px)`;
    background.style.transform = `translateX(${offsetX / 2}px)`;

    // Aplica el efecto de parallax a los elementos de título
    titleh1.style.transform = `translateX(${offsetX / 1.5}px)`;
    titleh2.style.transform = `translateX(${offsetX /1.2 }px)`;
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const lightMask = document.querySelector("[data-light-mask]");

window.addEventListener("mousemove",function(e){
    const posX =e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    lightMask.style.display = 'block';
    lightMask.animate([
        { left: `${posX}px`, top: `${posY}px` }
    ], { duration: 100, fill: "forwards"});

});


// Crear un objeto para almacenar el índice actual de cada carrusel
let currentSlideIndex = {};

// Función para mover el slide en un carrusel específico
function moveSlide(n, carouselId) {
  const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
  
  // Si el índice del carrusel no existe aún, inicializarlo
  if (!currentSlideIndex[carouselId]) {
    currentSlideIndex[carouselId] = 0;
  }
  
  // Calcular el nuevo índice del slide
  currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] + n + slides.length) % slides.length;
  
  // Ocultar todos los slides
  slides.forEach(slide => slide.style.display = 'none');
  
  // Mostrar el slide actual
  slides[currentSlideIndex[carouselId]].style.display = 'block';
}

// Inicializar todos los carruseles
function initCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
    const carouselId = carousel.id;
    
    // Mostrar el primer slide de cada carrusel
    moveSlide(0, carouselId);
  });
}

// Llamar a la función para inicializar los carruseles cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  initCarousels();
});



function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  const dayDiff = now.getDate() - birth.getDate();

  // Ajustar si el mes o el día no han llegado este año
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }
  return age;
}

// Fecha de nacimiento: 16 de noviembre de 2003
const birthDate = '2003-11-16';
const age = calculateAge(birthDate);


// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all the links in the navigation bar
  const navLinks = document.querySelectorAll('.nav .a');

  // Function to remove the 'selected' class from all links and add it to the clicked one
  function selectLink(event) {
    // Remove the 'selected' class from all links
    navLinks.forEach(link => link.classList.remove('selected'));

    // Add the 'selected' class to the clicked link
    event.target.classList.add('selected');
  }

  // Add click event listener to all the nav links
  navLinks.forEach(link => {
    link.addEventListener('click', selectLink);
  });
});