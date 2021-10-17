"use strict";

const showTime = () => {
    if(isLanguageActive("germanID")) {
        germanWordClock();
    } else if(isLanguageActive("englishID")) {
        englishWordClock();
    }
}

showTime();