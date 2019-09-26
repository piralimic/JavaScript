/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

document.body.onload = listeHeros;

async function listeHeros () {
  document.getElementById("target").innerHTML = "";

  const getResponse = await fetch('http://localhost:3000/heroes');
  const listHeroesJson = await getResponse.json();

  const template = document.getElementById("tpl-hero");
  const item = template.content.querySelector("select");

  for (let hero of listHeroesJson){
    const newOption = document.createElement("option");
    newOption.value = hero.id;
    newOption.innerText = hero.name;
    item.appendChild(newOption);
  }
  const clonage = template.content.cloneNode(true);
  document.getElementById("target").appendChild(clonage);

  // RESET TEMPLATE
  while(item.firstChild){
    item.removeChild(item.firstChild);
  }
}


  document.getElementById('run').addEventListener("click", async () => {
    try {
      const delResponse = await fetch('http://localhost:3000/heroes/' + document.getElementById("hero-id").value, {
        method: 'DELETE'
      });
      if (delResponse.ok) {
        console.log("L'élément a été supprimé");
        listeHeros();
      } else if (delResponse.status == 404) {
        console.log("L'élément n'existe pas");
      }

    } catch (e) {
      console.error(e.message);
    }

  });
})();
