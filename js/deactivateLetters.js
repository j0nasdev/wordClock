"use strict";

const deactiveLetters = () => {
    const letters = document.getElementsByClassName("letter");

    for(var i=0; i<letters.length; i++) {
        letters[i].classList.remove("active");
    }
}