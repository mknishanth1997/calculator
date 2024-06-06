// Theme Changer

// Theme buttons
const themeButtons = document.querySelectorAll(".thb");
[...themeButtons].forEach(element => {
    element.addEventListener("click", () => changeTheTheme(element.value));
});

// StyleSheets
const orangeGradient1 = document.getElementById("orange1");
const orangeGradient2 = document.getElementById("orange2");
const white = document.getElementById("white");
const black = document.getElementById("black");
const yellow = document.getElementById("yellow");
const stylesheet = document.getElementById("stylesheet");

function changeTheTheme(themeBtnValue) {
    if (themeBtnValue === "orangeGradient1") {
        orangeGradient1.setAttribute("href", "orangeGradient1.css");
        orangeGradient2.setAttribute("href", ""); // Set empty string to disable
        white.setAttribute("href", "");
        black.setAttribute("href", "");
        yellow.setAttribute("href", "");
        stylesheet.setAttribute("href", "stylesheet.css");

    } else if (themeBtnValue === "orangeGradient2") {
        orangeGradient2.setAttribute("href", "orangeGradient2.css");
        orangeGradient1.setAttribute("href", ""); // Set empty string to disable
        white.setAttribute("href", "");
        black.setAttribute("href", "");
        yellow.setAttribute("href", "");
        stylesheet.setAttribute("href", "stylesheet.css");
    }
    else if (themeBtnValue === "white")
        {
            white.setAttribute("href", "white.css");
            orangeGradient1.setAttribute("href", "");
            orangeGradient2.setAttribute("href", "");
            black.setAttribute("href", "");
            yellow.setAttribute("href", "");
            stylesheet.setAttribute("href", "stylesheet.css");
        }
    else if(themeBtnValue === "black")
        {
            black.setAttribute("href", "black.css");
            white.setAttribute("href", "");
            orangeGradient1.setAttribute("href", "");
            orangeGradient2.setAttribute("href", "");
            yellow.setAttribute("href", "");
            stylesheet.setAttribute("href", "stylesheet.css");
        }
    else if (themeBtnValue === "yellow")
        {
            yellow.setAttribute("href", "yellow.css");
            black.setAttribute("href", "");
            white.setAttribute("href", "");
            orangeGradient1.setAttribute("href", "");
            orangeGradient2.setAttribute("href", "");
            stylesheet.setAttribute("href", "stylesheet.css");
        }
}