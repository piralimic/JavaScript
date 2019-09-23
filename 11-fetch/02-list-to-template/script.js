/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById('run').addEventListener("click", async () => {
    const response = await fetch('http://localhost:3000/heroes')
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  });
})();
