// Seleccionamos los elementos
const inicio = document.getElementById('inicio');
const overlay = document.getElementById('overlay');
const cerrar = document.getElementById('cerrar');

// Al hacer click en la pantalla inicial, mostramos la carta
inicio.addEventListener('click', () => {
  overlay.classList.remove('oculto');
});

// Al hacer click en el botón cerrar, ocultamos la carta
cerrar.addEventListener('click', () => {
  overlay.classList.add('oculto');
});
