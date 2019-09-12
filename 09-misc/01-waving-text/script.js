/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let textToWave = document.getElementById('target').innerHTML;
  let lettersToWave = textToWave.split("");

  for (let i = 0; i < lettersToWave.length; i+=6) {
    lettersToWave[i] = '<span style="position: relative; top: 0px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 1; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: 6px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 2; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: 12px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 3; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: 20px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 4; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: 12px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 5; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: 6px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 7; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: -6px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 8; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: -12px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 9; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: -20px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 10; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: -12px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }
  for (let i = 11; i < lettersToWave.length; i+=12) {
    lettersToWave[i] = '<span style="position: relative; top: -6px; left: '+i*18+'px;">'+lettersToWave[i]+'</span>';
  }


  document.getElementById('target').innerHTML = lettersToWave.join("");
})();
