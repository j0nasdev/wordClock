"use strict";

const desktopHelpIcon = document.getElementById("desktopMinutesHelpIconID");
var helpDiv;
var helpContainerActive = false;

const moveHelpContainer = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    helpDiv.style.top = (mouseY - helpDiv.clientHeight - 5) + "px";
    helpDiv.style.left = (mouseX - helpDiv.clientWidth - 5) + "px";
}

const showHelpContainer = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    helpDiv = document.createElement("div");
    helpDiv.innerText = "Die Punkte die unten links zu sehen sind zeigen die Minuten an und ergänzen so zusätzlich die WortUhr um die Minutenanzeige.";
    helpDiv.classList.add("helpContainer");

    document.body.appendChild(helpDiv);

    helpDiv.style.top = (mouseY - helpDiv.clientHeight - 5) + "px";
    helpDiv.style.left = (mouseX - helpDiv.clientWidth - 5) + "px";
    document.addEventListener("mousemove", moveHelpContainer);
}

const removeHelpContainer = () => {
    document.body.removeChild(document.getElementsByClassName("helpContainer")[0]);
    document.removeEventListener("mousemove", moveHelpContainer);
}

desktopHelpIcon.onmouseover = showHelpContainer;
desktopHelpIcon.onmouseleave = removeHelpContainer;