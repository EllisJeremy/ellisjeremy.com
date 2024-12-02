"use strict";
// Select button and output element
const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);
const output = document.createElement("div");
output.id = "output";
document.body.appendChild(output);
// Add click event
button.addEventListener("click", () => {
    const now = new Date();
    output.textContent = `Button clicked at ${now.toLocaleTimeString()}`;
});
console.log("sylvester.js is loaded and working!");
