/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var userResponse = prompt("Désirez-vous du gâteau?");
    if (userResponse.toLowerCase() == "oui") {
      alert("Magnifique!");
    } else {
      alert("M'enfin, du gâteau, ça ne se refuse pas!");
    }
})();
