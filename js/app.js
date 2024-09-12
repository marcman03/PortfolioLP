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
