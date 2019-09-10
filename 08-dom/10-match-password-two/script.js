/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {

        document.getElementById('pass-one').removeAttribute("class");
        document.getElementById('pass-two').removeAttribute("class");


        if (document.getElementById('pass-one').value === "" || document.getElementById('pass-two').value === "") {
          document.getElementById('demo').innerHTML = "Veuillez d'abord compléter les deux champs avant de valider.";
          if (document.getElementById('pass-one').value === "") {
            document.getElementById('pass-one').setAttribute("class", "error");
          }
          if (document.getElementById('pass-two').value === "") {
            document.getElementById('pass-two').setAttribute("class", "error");
          }
        } else {
          if (document.getElementById('pass-one').value === document.getElementById('pass-two').value) {
            document.getElementById('demo').innerHTML = "";
          } else {
            document.getElementById('demo').innerHTML = "Mots de passe différents";
            document.getElementById('pass-one').setAttribute("class", "error");
            document.getElementById('pass-two').setAttribute("class", "error");

          }
        }
    });
})();
