/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let minInputLength = 8;
    let currentInputLength = document.getElementById('pass-one').value.length;
    let regexCheckValue = /[0-9]/g;
    let inputCurrentValue;
    let regexArray = [0];


    document.getElementById('pass-one').addEventListener('input', () => {

        inputCurrentValue = document.getElementById('pass-one').value;

        if (inputCurrentValue.match(regexCheckValue)) {
          regexArray = inputCurrentValue.match(regexCheckValue);
        }
        currentInputLength = document.getElementById('pass-one').value.length;

        if (currentInputLength >= minInputLength && regexArray.length >= 2) {
          document.getElementById('validity').innerHTML = "Ok";
        } else {
          document.getElementById('validity').innerHTML = "Pas ok";
        }


    });
})();
