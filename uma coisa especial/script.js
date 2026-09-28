
// =========================
// ABRIR A CARTA
// =========================

const carta = document.getElementById("carta");

carta.addEventListener("click", function () {

    carta.classList.toggle("aberta");

});


// =========================
// MÚSICA
// =========================

const musica = document.getElementById("musica");

const botaoMusica =
    document.getElementById("botaoMusica");


botaoMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botaoMusica.innerHTML =
            "⏸️ Pausar música";

    } else {

        musica.pause();

        botaoMusica.innerHTML =
            "🎵 Tocar música";

    }

});
