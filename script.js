const texto = document.getElementById("textoMarquesina");

let posicion = window.innerWidth;

function animar() {
    posicion--;

    if (posicion < -texto.offsetWidth) {
        posicion = window.innerWidth;
    }

    texto.style.transform = `translateX(${posicion}px)`;

    requestAnimationFrame(animar);
}

animar();