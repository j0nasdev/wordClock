"use strict";

const minuteDot1 = document.getElementById("minuteDotOneID");
const minuteDot2 = document.getElementById("minuteDotTwoID");
const minuteDot3 = document.getElementById("minuteDotThreeID");
const minuteDot4 = document.getElementById("minuteDotFourID");


var counter = 0;
const showMinutes = () => {
    minuteDot1.classList.remove("minuteActive");
    minuteDot2.classList.remove("minuteActive");
    minuteDot3.classList.remove("minuteActive");
    minuteDot4.classList.remove("minuteActive");

    // 1, 2, 3, 4, 6, 7, 8, 9
    if((globalMinutes%5).isBetween(1, 4)) {
        minuteDot1.classList.add("minuteActive");
    }
    
    // 2, 3, 4, 7, 8, 9
    if((globalMinutes%5).isBetween(2, 4)) {
        minuteDot2.classList.add("minuteActive");
    }

    // 3, 4, 8, 9
    if((globalMinutes%5).isBetween(3, 4)) {
        minuteDot3.classList.add("minuteActive");
    }

    // 4, 9
    if((globalMinutes%5).isBetween(4, 4)) {
        minuteDot4.classList.add("minuteActive");
    }
}