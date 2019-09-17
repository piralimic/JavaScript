/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // chosePromise1 s'exécute avec un timeout de 5 secondes
    const chosePromise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('<li>Ce message vous informe que la chosePromise1 est correctement résolue avec un délai minimum de 5 seconde</li>');
      }, 5000);
    });
    // chosePromise2 s'exécute avec un timeout de 1 secondes
    const chosePromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('<li>Ce message vous informe que la chosePromise2 est correctement résolue avec un délai minimum de 1 seconde</li>');
      }, 1000);
    });

    document.getElementById("run").addEventListener("click", () => {
      let resultat = "Attente de résultat :";
      document.getElementById("demo").innerHTML = resultat;
      Promise.all([chosePromise1, chosePromise2]).then((res) => {
        resultat = "Résultat final :<ul>";
        resultat += res[0];
        resultat += res[1];
        document.getElementById("demo").innerHTML = resultat+"</ul>";
      });
  });
})();
