// Fecha objetivo (24 de noviembre)
const targetDate = new Date('2023-11-24 13:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para actualizar el contador inmediatamente
updateCountdown();
// Obtén una referencia al botón por su ID

const botonGoogleMaps = document.getElementById("botonGoogleMaps");



// Agrega un manejador de eventos al botón de Google Maps
botonGoogleMaps.addEventListener("click", function() {
    const urlGoogleMaps = "https://maps.app.goo.gl/GLYdA1xn6hCGAf2H8";
    window.open(urlGoogleMaps, "_blank");
});
