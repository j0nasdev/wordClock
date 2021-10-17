"use strict";

// const getTime = () => {
//     var currentDate = new Date();
//     var currentHour = currentDate.getHours();

//     if(currentHour > 12) {
//         currentHour-=12;
//     }

//     var obj = {
//         minute: currentDate.getMinutes(),
//         hour: currentHour
//     }

//     return obj;
// }


var globalMinutes = 0;
var globalHours = 1;

const getTime = () => {
    var now = new Date();
    var minutes = now.getMinutes(), hours = now.getHours();

    if(hours > 12) {
        hours-=12;
    }

    globalHours = hours;
    globalMinutes = minutes;
}