/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/catch
  document.getElementById('run').addEventListener("click", () => {
    window.lib.getPersons().then(function(tableauPersonnes) { // resolve()
      console.table(tableauPersonnes);
    }).catch(function(erreurTabPersonnes) { // reject()
      // affiche le message d'erreur uniquement sinon renvoi un objet de l'erreur
      // https://www.w3schools.com/jsref/met_console_error.asp
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/catch#Utilisation_de_la_m%C3%A9thode_catch
      console.error(erreurTabPersonnes.message);
      /*
      alert(erreurTabPersonnes); // affichera "Error: Bad luck!"
      alert(erreurTabPersonnes.message); // affichera juste "Bad luck!"
      */

    });
  });
})();
