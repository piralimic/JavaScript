/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let nbreEssais = 0;
    let randomCent = Math.floor(Math.random() * 100) + 1);
    document.getElementById('demo').innerHTML = "Nombre d'essais : "+nbreEssais;

    document.getElementById('slider').addEventListener('input', () => {
      document.getElementById('target').innerHTML = document.getElementById('slider').value;
    });

    document.getElementById('check').addEventListener('click', () => {
      nbreEssais++;
      document.getElementById('demo').innerHTML = "Nombre d'essais : "+nbreEssais;
      if (document.getElementById('slider').value > randomCent) {
        alert(document.getElementById('slider').value+' est plus GRAND que le chiffre mystère !');
      }
      if (document.getElementById('slider').value < randomCent) {
        alert(document.getElementById('slider').value+' est plus PETIT que le chiffre mystère !');
      }
      if (document.getElementById('slider').value == randomCent) {
        alert('Bravo '+document.getElementById('slider').value+' est bien le chiffre mystère ! Vous avez réussi en seulement '+nbreEssais+' essais.');
      }
    });
})();
