"use strict";

const germanWordClock = () => {
    // VOLLE STUNDEN
    const showFullHours = () => {
        if(isFullHour(globalMinutes)) {
            activateLetters("es", "ist", germanHoursWords[globalHours-1], "uhr");
        }
    }


    // NICHT VOLLE STUNDEN
    const activateBeforeAfter = () => {
        if(globalMinutes.isBetween(5, 24) || globalMinutes.isBetween(35, 39) ) {
            activateLetters("nach");
        } else if(globalMinutes.isBetween(25, 29) ||globalMinutes.isBetween(40, 59)) {
            activateLetters("vor");
        }
    }
     
    const activateMinutes = (minutes) => {
        if(!minutes.isBetween(0, 4) && !minutes.isBetween(30, 34)) {
            if((minutes%20).isBetween(0, 4)) {
                activateLetters("minutenZwanzig");
            } else if((minutes%15).isBetween(0, 4)) {
                activateLetters("minutenViertel");
            } else if((minutes%10).isBetween(0, 4)) {
                activateLetters("minutenZehn");
            } else if((minutes%5).isBetween(0, 4)) {
                activateLetters("minutenFuenf");
            }
        }
    }

    const activateHours = () => {
        var minutes = globalMinutes;
        var hour = globalHours;
        if(minutes >= 25) hour++;

        if(hour !== 1) {               
            if(hour > 12) {            // Nach Null Uhr z.B. 00:35 (hour kann 13 haben bei z.B. halb 1)
                activateLetters("eins");
            } else {
                activateLetters(germanHoursWords[hour-1]);
            }
        } else {
            activateLetters("eins");
        }
    }

    const showNotFullHours = () => {
        if(!isFullHour(globalMinutes)) {

            // Standard Aktiv
            activateLetters("es", "ist");

            // Halb oder Nicht Halb
            if(globalMinutes.isBetween(25, 39)) {
                activateLetters("halb");
            }

            // vor oder nach
            activateBeforeAfter();

            // stunde aktivieren
            activateHours();

            // minuten aktivieren
            activateMinutes(globalMinutes);
        }
    }

    deactiveLetters();
    showNotFullHours();
    showFullHours();
}