/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {

      const cat1 = new Cat("Skitty", 9);
      const cat2 = new Cat("Pixel", 6);

      let resultat = "Liste des chats :";

      resultat += "<ul><li>Nom : "+cat1.name+"</li><li>Age : "+cat1.age+" ans</ul>";
      resultat += "<ul><li>Nom : "+cat2.name+"</li><li>Age : "+cat2.age+" ans</ul>";

    document.getElementById("demo").innerHTML = resultat;
  });
})();
