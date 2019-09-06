/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {

    const listeNombresRand = [];
    let nombreRand;
    let somme = 0;
    let petitNb = 100;
    let grandNb = 0;

    for (let i = 1; i < 11; i++) {
      nombreRand = Math.ceil(Math.random()*100);
      listeNombresRand.push(nombreRand);
      somme += nombreRand;
      if (petitNb > nombreRand) {
        petitNb = nombreRand;
      }
      if (grandNb < nombreRand) {
        grandNb = nombreRand;
      }
      document.getElementById("n-"+i).innerHTML = nombreRand;
    }
    document.getElementById("sum").innerHTML = somme;
    document.getElementById("average").innerHTML = Math.ceil(somme/10);
    document.getElementById("min").innerHTML = petitNb;
    document.getElementById("max").innerHTML = grandNb;
  });
})();
