/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
      // change la couleur de fond du document hmtl en ROUGE
      let myElement = document.querySelector("html");
      myElement.style.background = document.getElementById('color').value;
  });
})();
