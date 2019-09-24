/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const response = await fetch('http://localhost:3000/heroes',{
      method: 'POST',
      header: {
        'Content-Type'
      }
    });



    document.getElementById('run').addEventListener("click", async () => {
      const response = await fetch('http://localhost:3000/heroes?id='+document.getElementById("hero-id").value);
      const listHeroesJson = await response.json();
      //console.log(JSON.stringify(listHeroesJson));
      document.getElementById("target").innerHTML = "";
      // Get the TEMPLATE element:
      const template = document.getElementById("tpl-hero");
      // Get the LI element from the template:
      const item = template.content.querySelector("li");
      for (let hero of listHeroesJson){
        item.querySelector("strong").innerText = hero.name;
        item.querySelector("em").innerText = hero.alterEgo;
        // afficher les sorts dans une liste
        const listAbilities = hero.abilities;
        let p = "<ul>";
        for (let ability of listAbilities){
          p += "<li>"+ability+"</li>";
        }
        item.querySelector("p").innerHTML = p+"</ul>";
        //item.querySelector("p").innerText = hero.abilities;
        // Clone Node and add the new one into the TARGET
        const clonage = template.content.cloneNode(true);
        document.getElementById("target").appendChild(clonage);
      }


    });
  })();
