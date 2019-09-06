/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [{
      name: "mouette",
      fem: true
    },
    {
      name: "corbeau"
    },
    {
      name: "mésange",
      fem: true
    },
    {
      name: "hibou"
    },
    {
      name: "buse",
      fem: true
    },
    {
      name: "pigeon"
    },
    {
      name: "pie",
      fem: true
    },
    {
      name: "vautour"
    },
    {
      name: "faucon"
    },
    {
      name: "rouge-gorge"
    },
    {
      name: "tourterelle",
      fem: true
    },
    {
      name: "corneille",
      fem: true
    },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);

  // your code here

  document.getElementById("run").addEventListener("click", () => {

    let adjectif;
    let oiseau;
    let i = 0;
    let randomAdjectif = Math.floor(Math.random() * adjectives.size);
    let randomBirds = Math.floor(Math.random() * adjectives.size);


    for (let item of adjectives) {
      if (i == randomAdjectif) {
        if (birds[randomBirds].fem) {
          adjectif = item + "e";
        } else {
          adjectif = item;
        }
      }
      i++
    }

    if (birds[randomBirds].fem) {
      oiseau = "La ";
    } else {
      oiseau = "Le ";
    }

    if (adjectif == 'grand' || adjectif == 'petit' || adjectif == 'grande' || adjectif == 'petite') {
      resultat = oiseau + adjectif +" "+ birds[randomBirds].name;
    } else {
      resultat = oiseau + birds[randomBirds].name +" "+ adjectif;
    }

    document.getElementById("target").innerHTML = resultat;

  });
})();
