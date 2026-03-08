const buttons = document.querySelectorAll(".links__button");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.backgroundPosition = `${x}px ${y}px`;
  });
});

// avatar
// Configuración
const totalImagenes = 11;
const carpeta = "images/";
const extension = ".avif";
const velocidad = 350;

let contador = 1;
const imgPerfil = document.getElementById("avatar");

// Función de animación
function iniciarAnimacion() {
  setInterval(() => {
    // Construye la ruta: img/1.jpg, img/2.jpg...
    imgPerfil.src = `${carpeta}${contador}${extension}`;

    // Reinicia al llegar al final
    if (contador >= totalImagenes) {
      contador = 1;
    } else {
      contador++;
    }
  }, velocidad);
}

// Iniciar cuando la página cargue
window.onload = iniciarAnimacion;
