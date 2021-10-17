"use strict";

const isFullHour = (minutes) => {
    return minutes.isBetween(0, 4)
}