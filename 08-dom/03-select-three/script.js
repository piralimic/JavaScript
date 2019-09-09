/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementsByClassName("target")[0].innerHTML = "owned";

    for (let i = 0; i < document.getElementsByClassName("target").length; i++) {
      document.getElementsByClassName("target")[i].innerHTML = "owned";
    }
})();
