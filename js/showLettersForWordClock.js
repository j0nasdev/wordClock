"use strict";

const showLettersForWordClock = (obj) => {
    var counter = 0;

    // Child Container Erstellen für Buchstaben
    const parentContainer = document.getElementById("containerWordClockID");
    var newContainer = document.createElement("div");
    newContainer.id = "contentWordClockID";
    parentContainer.appendChild(newContainer);

    const container = document.getElementById("contentWordClockID")

    for(var keys = Object.keys(obj), i = 0; i < keys.length; i++) {     // Erste for schleife für alle Objekt Keys
        var key = keys[i], value = obj[key], last = keys[i-1];
        var wordArray = value.split("");
        var overflowCounter = 0;        // Counter für Doppelte Buchstaben die nicht gerendert Werden
        
        for(var a=0; a<wordArray.length; a++) {
            var newPara = document.createElement("span");
            
            if(wordArray[a-1] !== "!" && wordArray[a] !== "!") {
                newPara.innerHTML = wordArray[a];
                newPara.classList.add("letter");
                newPara.classList.add(key);
                container.appendChild(newPara);  
            } else {
                counter--;
                if(wordArray[a] !== "!") {
                    overflowCounter++; 
                    var lastElements = document.getElementsByClassName(last);   //LETZTE ELEMENTE
                    var lastElement = lastElements[lastElements.length-overflowCounter];
                    lastElement.classList.add(key);     // Jetziger Klassename zu letze Elemente hinzufügen
                }
            }
            
            counter++;
            if(counter>=11) {
                var newBr = document.createElement("br");
                container.appendChild(newBr);
                counter=0;
            }
        }

        overflowCounter=0;
    }
}

// Buchstaben anzeigen
showLettersForWordClock(germanLanguage);