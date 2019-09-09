/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let resultat = "Nom complet : ";

  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    get name() {
      return `${this.firstname} ${this.lastname}`;
    }
    set name(nomComplet) {
      let splitName = nomComplet.split(" ");
      this.firstname = splitName[0];
      this.lastname = splitName[1];
    }
  }
  document.getElementById("run").addEventListener("click", () => {
    // nouvelle objet Person
    let premPersonne = new Person("Monsieur", "Poulpe");
    // appel du getter name
    resultat += "<ul><li>name : "+premPersonne.name+"</li></ul>";
    // appel du setter name
    premPersonne.name = "Madame Pieuvre";

    resultat += "<br><br>Nouvelles valeurs :<ul><li>firstname : " + premPersonne.firstname + "</li><li>lastname : " + premPersonne.lastname+"</li>";

    document.getElementById("demo").innerHTML = resultat;
  });
})();
