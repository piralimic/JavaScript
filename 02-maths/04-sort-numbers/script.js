/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        var numbersList = document.getElementById("numbers").value;
        // split the string into an array
        // elements are separated with ", " as filter
        var numberArray = numbersList.split(", ");
        // sort elements by order and comparaison
        numberArray.sort(function(a, b){return a-b});

        var result = "";
        for (var i = 0; i < numberArray.length; i++) {
          if (i < numberArray.length - 1) {
              result += numberArray[i]+", ";
          } else {
          result += numberArray[i];
        }
        }
        // affiche le résultat dans la zone de saisie HTML
        document.getElementById("numbers").value = result;
    });
})();
