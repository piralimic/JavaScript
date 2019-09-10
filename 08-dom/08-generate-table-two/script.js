/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let x = 1;

    let maTable = "<table>"
    for (let i = 1; i <= 10; i++) {
      maTable += "<tr>";
        for (x = 1; x <= 10; x++) {
          maTable += "<td>"+i+"*"+x+"</td>"
        }
      maTable += "</tr>";
    }
    maTable += "</table>"
    document.getElementById('target').innerHTML = maTable;
})();
