const textarea = document.getElementById("textarea");
const filename = document.getElementById("filename-input");
function fontsize(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px"
}
function bold(e) {
    let selection = document.getSelection();
    let selRange = selection.getRangeAt(0);
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
    }
    else {
        textarea.style.fontWeight = "bold";
    }
}
function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
    }
    else {
        textarea.style.fontStyle = "italic";
    }
}
function underline(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
    }
    else {
        textarea.style.textDecoration = "underline";
    }
}
function justify_left(e) {
    textarea.style.textAlign = "left";
}
function justify_center(e) {
    textarea.style.textAlign = "center";
}
function justify_right(e) {
    textarea.style.textAlign = "right";
}
function full(e) {
    textarea.style.textAlign = "justify";
}
function capital(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
    }
    else {
        textarea.style.textTransform = "uppercase";
    }
}
function erase() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}
function font_color(e) {
    let value = e.value;
    textarea.style.color = value;
}

// // Get references to the HTML elements
// const textarea = document.getElementById('myTextarea');
// const changeColorButton = document.getElementById('changeColorButton');

// // Define an array of background colors
// const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

// let currentColorIndex = 0;

// // Function to change the background color of the textarea
// function changeBackgroundColor() {
//     currentColorIndex = (currentColorIndex + 1) % colors.length;
//     textarea.style.backgroundColor = colors[currentColorIndex];
// }

// // Add a click event listener to the button
// changeColorButton.changeColorButton('click', changeBackgroundColor);

// document.getElementById("changeColorButton").addEventListener("click", function() {
//     var textarea = document.getElementById("textarea");
//     textarea.style.backgroundColor = "#00000"; // Change this to the desired color
// });

function changeBackgroundColor() {
    var textarea = document.getElementById("textarea");
    textarea.style.backgroundColor = "#000000"; // Change this to the desired color
}



function pdfgenerat() {
    var element = document.getElementById('textarea');
    html2pdf(element).save(filename.value);
}
