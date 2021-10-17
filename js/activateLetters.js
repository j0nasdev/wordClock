"use strict";

function activateLetters () {
    for(var a=0; a<arguments.length; a++) {
        var text = arguments[a];
        var letters = document.getElementsByClassName(text);
        for(var i=0; i<letters.length; i++) {
            letters[i].classList.add("active");
        }
    }
}