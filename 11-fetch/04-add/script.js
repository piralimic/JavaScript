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
  /*
  newHero({
      name: "Batman",
      alterEgo: "Bruce Wayne",
      abilities: [
        "Expert in interrogation techniques",
        "Different fighting styles"
      ]
  });
  */
  let newHero = {
    id: "",
    name: "",
    alterEgo: "",
    abilities: []
  };

  const addInJsonFile = () => {
    newHero.name = document.querySelector("#hero-name").value;
    newHero.alterEgo = document.querySelector("#hero-alter-ego").value;
    newHero.abilities = document.querySelector("#hero-powers").value.split(",");
  };

  const jsonHeader = new Headers({
    'Content-Type': 'application/json;charset=utf-8'
  });

  const checkInputForm = (id) => {
    if (document.querySelector(id).value == "") {
      return false;
    } else
      return true;
  };

  document.getElementById('run').addEventListener("click", async () => {
    if (checkInputForm("#hero-name") && checkInputForm("#hero-alter-ego") && checkInputForm("#hero-powers")) {
      addInJsonFile();

      let response = await fetch('http://localhost:3000/heroes', {
        method: 'POST',
        headers: jsonHeader,
        body: JSON.stringify(newHero)
      });
      if (response.ok) {
        const responseData = await fetch('http://localhost:3000/heroes');
        const myJson = await responseData.json();
        console.log(JSON.stringify(myJson));
        alert("Le nouveau héro a été enregistré");
      } else if (response.status == 404) {
        console.log("L'enregistrement a échoué, la page est actuellement indisponible");
      }
    } else {
      alert("Tous les champs doivent être correctement complétés avant de cliquer sur le bouton couillon.");
    }

  });
})();
