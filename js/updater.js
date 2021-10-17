"use strict";

setInterval(() => {
    // Aktuelle Uhrzeit bekommen
    getTime();

    // Minuten als Punkte anzeigen
    showMinutes();

    // Uhrzeit in der WortUhr anzeigen
    showTime();
}, 1000);