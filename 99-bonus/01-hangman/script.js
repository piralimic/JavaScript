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
  const lettresSecretes = [
    "D",
    "E",
    "V",
    "I",
    "N",
    "E",
    "R"
  ];

  const lettresDecouvertes = [
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_"
  ];

  let compteurDeLettres = 0;

  function guessLetter() {
    let propositionJoueur = prompt("Proposez une lettre : ");
    const lettresSecretesTotales = lettresSecretes.length;

    for (let i = 0; i < lettresSecretesTotales; i++) {
      if (lettresSecretes[i] == propositionJoueur) {
        if (lettresDecouvertes[i] != propositionJoueur) {
          lettresDecouvertes[i] = propositionJoueur;
          compteurDeLettres++;
        }
      }
    }

    document.getElementById("demo").innerText = lettresDecouvertes.join();
    

    if (compteurDeLettres == lettresSecretes.length) {
      alert('Bien joué! ');
      console.table(lettresDecouvertes);
    } else {
      guessLetter();
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    guessLetter();
  });
})();
