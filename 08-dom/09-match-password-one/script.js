/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        document.getElementById('pass-one').style.borderColor = "black";
        document.getElementById('pass-two').style.borderColor = "black";

        if (document.getElementById('pass-one').value === "" || document.getElementById('pass-two').value === "") {
          document.getElementById("demo").innerHTML = "Veuillez d'abord compléter les deux champs avant de valider.";
          if (document.getElementById('pass-one').value === "") {
            document.getElementById('pass-one').style.borderColor = "red";
          }
          if (document.getElementById('pass-two').value === "") {
            document.getElementById('pass-two').style.borderColor = "red";
          }
        } else {
          if (document.getElementById('pass-one').value === document.getElementById('pass-two').value) {
            document.getElementById("demo").innerHTML = "";
          } else {
            document.getElementById("demo").innerHTML = "Mots de passe différents";
            document.getElementById('pass-one').style.borderColor = "red";
            document.getElementById('pass-two').style.borderColor = "red";
          }
        }
    });
})();
