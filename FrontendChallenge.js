import $ from "jquery";

const rootApp = document.getElementById("root");

rootApp.innerHTML = '<button id="toggleButton" onclick="toggleButton()">ON</button>';

window.toggleButton = function() {
    const button = $("#toggleButton");
    const currentState = button.text();

    if (currentState === "ON") {
        button.text("OFF");
    } else {
        button.text("ON");
    }
};
