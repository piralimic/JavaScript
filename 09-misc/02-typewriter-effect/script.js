/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let i = 0;
  let originalText = document.getElementById('target').innerText; /* The text */
  let speedTyping = Math.floor(originalText.length/1.8); /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < originalText.length) {
      document.getElementById("target").innerHTML += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, speedTyping);
    }
  }
  
  document.getElementById("target").innerHTML = "";
  typeWriter();
})();
