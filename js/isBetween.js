"use strict";

Number.prototype.isBetween = function(a, b) {
    return this >= a && this <= b;
};
