/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

    let resultat = "Mon ID : <ul>"

    let monId = {
      lastname:"Pirali",
      firstname:"Michaël",
      age:35,
      city:"Remicourt",
      country:"Belgique"
    };

    resultat += "<li>Prénom : "+monId.firstname+"</li><li>Nom : "+monId.lastname+"</li><li>Age : "+monId.age+"</li><li>Localité : "+monId.city+"</li><li>Pays : "+monId.country+"</li></ul>"

    document.getElementById("demo").innerHTML = resultat;
  });
})();
