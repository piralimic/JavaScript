/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  var userAge;
  var userSex;
  var userCity;
  var userConfirmation = false;

  while (!userConfirmation) {
    userAge = prompt("Veuillez indiquer votre âge:");
    userSex = prompt("Veuillez indiquer votre genre: M / F / Autre");
    if (userSex.toLowerCase() == 'm') {
      userSex = "un homme";
    } else {
      if (userSex.toLowerCase() == 'f') {
        userSex = "une femme";
      } else {
        userSex = "d'un autre genre";
      }
    }
    userCity = prompt("Veuillez indiquer le nom de votre localité:");
    userConfirmation = confirm("Confirmez-vous avoir " + userAge + " ans, être " + userSex + " et habiter à " + userCity + " ?");
  }

})();
