/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {

      // retourne les clés d'un objet sous forme de tableau
      let objectKeys = Object.keys(person);
      console.log(objectKeys);
      // retourne les valeurs d'un objet sous forme de tableau
      let objectValues = Object.values(person);
      console.log(objectValues);
      // retourne la paire clés/valeurs d'un objet sous forme de tableau (pas forcément dans le même ordre)
      let resultat = " Objet (person) :<ul>";
      for (let [key, value] of Object.entries(person)) {
        resultat += `<li>${key}: ${value}</li>`;
      }

    document.getElementById("demo").innerHTML = resultat+"</ul>";
  });
})();
