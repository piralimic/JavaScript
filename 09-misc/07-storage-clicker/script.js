/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let i = document.getElementById('target').innerHTML;

    document.getElementById("increment").addEventListener("click", () => {
      i++;
      localStorage.setItem("counter", i);
      document.getElementById("target").innerHTML = localStorage.getItem("counter");
    });

    // Store in localStorage
    localStorage.setItem("counter", i);
    // Retrieve from localStorage
    document.getElementById("target").innerHTML = localStorage.getItem("counter");
  })();
