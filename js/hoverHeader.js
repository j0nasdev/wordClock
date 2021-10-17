"use strict";

const header = document.getElementById("wordClockNameID");

const gap = 35; // Klein nicht weit auseinander, Groß weiter auseinander

var deleteShadowTimer;
var deleteTransitionTimer;

const showShadow = (e) => {
    clearTimeout(deleteShadowTimer);
    header.style.transition = "";

    var x = Math.round((e.x / 200 * gap) - (gap / 2));
    var y = Math.round((e.y / 200 * gap) - (gap / 2));

    // header.style.textShadow = 
    //     (x * -2) + "px " + (y * -2) + "px " + "0 rgba(240, 55, 165, 0.2)," +       // LILA
    //     (x * -1) + "px " + (y * -1) + "px " + "0 rgba(240, 55, 165, 0.2)," +       // GELB
    //     (x * 1) + "px " + (y * 1) + "px " + "0 rgba(240, 55, 165, 0.2)";           // BLAU

    header.style.boxShadow = 
        (x * -2) + "px " + (y * -2) + "px " + "0 rgba(255, 0, 255, 0.4)," +       // LILA
        (x * -1) + "px " + (y * -1) + "px " + "0 rgba(255, 255, 0, 0.4)," +       // GELB
        (x * 1) + "px " + (y * 1) + "px " + "0 rgba(0, 255, 255, 0.4)";           // BLAU
}

const deleteShadow = () => {
    deleteShadowTimer = setTimeout(() => {
        header.style.transition = "0.3s ease-in";
        header.style.boxShadow = "20px 20px 0px rgba(0, 0, 0, 0)";

        deleteTransitionTimer = setTimeout(() => {
            header.style.transition = "";
        }, 310);
    }, 1000);
}

header.addEventListener("mousemove", showShadow);
header.addEventListener("mouseleave", deleteShadow);