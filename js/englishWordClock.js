"use strict";

const englishWordClock = () => {
    // VOLLE STUNDEN
    const showFullHours = () => {
        if(isFullHour(globalMinutes)) {
            activateLetters("it", "is", englishHoursWords[globalHours-1], "clock");
        }
    }


    // NICHT VOLLE STUNDEN
    const activateBeforeAfter = () => {
        if(globalMinutes.isBetween(5, 34)) {
            activateLetters("past");
        } else if(globalMinutes.isBetween(35, 59)) {
            activateLetters("to");
        }
    }
     
    const activateMinutes = (minutes) => {
        if(!minutes.isBetween(0, 4) && !minutes.isBetween(30, 34)) {
            if(minutes.isBetween(25, 29) || minutes.isBetween(35, 39)) {
                activateLetters("minutesTwentyFive")
            } else if((minutes%20).isBetween(0, 4)) {
                activateLetters("minutesTwenty");
            } else if((minutes%15).isBetween(0, 4)) {
                activateLetters("minutesQuarter");
            } else if((minutes%10).isBetween(0, 4)) {
                activateLetters("minuesTen");
            } else if((minutes%5).isBetween(0, 4)) {
                activateLetters("minutesFive");
            }
        }
    }

    const activateHours = () => {
        var minutes = globalMinutes;
        var hour = globalHours;
        if(minutes >= 35) hour++;

        if(hour > 12) {            
            activateLetters("one");
        } else {
            activateLetters(englishHoursWords[hour-1]);
        }
    }

    const showNotFullHours = () => {
        if(!isFullHour(globalMinutes)) {

            // Standard Aktiv
            activateLetters("it", "is");

            // Halb oder Nicht Halb
            if(globalMinutes.isBetween(30, 34)) {
                activateLetters("half");
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