/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", () => {

      let resultat = "Nouvel objet : <ul>"

      // fusion des 2 tableaux en 1 map
      const fusionTabs = new Map();
      for (var i = 0; i < keys.length; i++) {
        fusionTabs.set(keys[i], values[i]);
        resultat += "<li>"+keys[i]+" : "+values[i]+"</li>";
      }

      // conversion de la map vers un nouvel objet
      const obj = Object.fromEntries(fusionTabs);
      console.log(obj);

      //https://stackoverflow.com/questions/1117916/merge-keys-array-and-values-array-into-an-object-in-javascript
      //function toObject(names, values) {
      //  var result = {};
      //    for (var i = 0; i < names.length; i++)
      //   result[names[i]] = values[i];
      //   return result;
      //}

    document.getElementById("demo").innerHTML = resultat+"</ul>";
  });
})();
