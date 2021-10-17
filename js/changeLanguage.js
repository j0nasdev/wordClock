"use strict";

const german = document.getElementById("germanID");
const english = document.getElementById("englishID");

const changeLanguage = (language) => {
    var id = language.id;
    
    if(!isLanguageActive(id)) {
        var elements = document.getElementsByClassName("language")
        for(var i=0; i<elements.length; i++) {
            elements[i].classList.remove("languageActive");
        }
        language.classList.add("languageActive");
    }
}

german.addEventListener("click", () => {
    changeLanguage(german);

    document.getElementById("contentWordClockID").remove();
    showLettersForWordClock(germanLanguage);
});

english.addEventListener("click", () => {
    changeLanguage(english);

    document.getElementById("contentWordClockID").remove();
    showLettersForWordClock(englishLanguage);
});