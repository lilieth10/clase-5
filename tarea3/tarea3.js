// Número de clases de r/argentina programa
const numClases = 5; // Supongamos que hay 5 clases

// Función para calcular el tiempo total de los videos
function calcularTiempoTotal() {
    let horasTotal = 0;
    let minutosTotal = 0;
    let segundosTotal = 0;

    // Recorre cada campo de tiempo de video y suma los valores
    for (let i = 1; i <= numClases; i++) {
        const horas = parseInt(document.querySelector(`#horas${i}`).value) || 0;
        const minutos = parseInt(document.querySelector(`#minutos${i}`).value) || 0;
        const segundos = parseInt(document.querySelector(`#segundos${i}`).value) || 0;

        horasTotal += horas;
        minutosTotal += minutos;
        segundosTotal += segundos;
    }

    // Ajusta los minutos y segundos si es mayor que 59
    minutosTotal += Math.floor(segundosTotal / 60);
    segundosTotal %= 60;
    horasTotal += Math.floor(minutosTotal / 60);
    minutosTotal %= 60;

    // Muestra el tiempo total en el elemento HTML correspondiente
    const tiempoTotalElement = document.getElementById('tiempoTotal');
    tiempoTotalElement.textContent = `Tiempo total: ${horasTotal} horas, ${minutosTotal} minutos, ${segundosTotal} segundos`;
}

// Asigna la función calcularTiempoTotal al evento click del botón correspondiente
document.getElementById('calcularTiempoTotal').addEventListener('click', calcularTiempoTotal);

// Crea los campos de tiempo de video para cada clase
const videosContainer = document.getElementById('videos');
for (let i = 1; i <= numClases; i++) {
    const videoDiv = document.createElement('div');
    videoDiv.innerHTML = `
        <label for="horas${i}">Horas:</label>
        <input type="number" id="horas${i}" min="0"><br>
        <label for="minutos${i}">Minutos:</label>
        <input type="number" id="minutos${i}" min="0" max="59"><br>
        <label for="segundos${i}">Segundos:</label>
        <input type="number" id="segundos${i}" min="0" max="59"><br>
        <hr>
    `;
    videosContainer.appendChild(videoDiv);
}
