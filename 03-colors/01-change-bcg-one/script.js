/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("red").addEventListener("click", () => {
        // change la couleur de fond du document hmtl en ROUGE
        let myElement = document.querySelector("html");
        myElement.style.background = "#F00";
    });
    document.getElementById("green").addEventListener("click", () => {
        // change la couleur de fond du document hmtl en ROUGE
        let myElement = document.querySelector("html");
        myElement.style.background = "#0F0";
    });
    document.getElementById("yellow").addEventListener("click", () => {
        // change la couleur de fond du document hmtl en ROUGE
        let myElement = document.querySelector("html");
        myElement.style.background = "#FC3";
    });
    document.getElementById("blue").addEventListener("click", () => {
        // change la couleur de fond du document hmtl en ROUGE
        let myElement = document.querySelector("html");
        myElement.style.background = "#16232E";
    });
})();
