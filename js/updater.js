"use strict";

const update = () => {
    // Aktuelle Uhrzeit bekommen
    getTime();

    // Minuten als Punkte anzeigen
    showMinutes();

    // Uhrzeit in der WortUhr anzeigen
    showTime();
}

// Wird ausgeführt bei Start

window.addEventListener("load", () => {
    update();
});

setInterval(() => {
    update();
}, 1000);

