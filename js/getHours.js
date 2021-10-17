"use strict";

Number.prototype.getHours = function(hours, biggerAs) {
    if(this > biggerAs) {
        hours++;
    }
    return hours
};
