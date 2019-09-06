/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {

      let resultat;
      let total=0;

      for (let item of people) {
        if (item == "Alexandre") {
          resultat = "Alexandre est dans la liste !"
        } 
        total++;
      }

    document.getElementById("demo").innerHTML = resultat+"<br>Il y a "+total+" personne(s) inscrite(s)";

  });
})();
