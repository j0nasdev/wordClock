"use strict";

const isLanguageActive = (languageID) => {
    return document.getElementById(languageID).classList.contains("languageActive")
}
