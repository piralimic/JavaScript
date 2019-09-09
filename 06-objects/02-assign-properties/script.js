/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {

    console.log(computers[2].available);
    let resultat = "Liste des ordinateurs :"
    let dispo;
    let user;

    for (var i = 0; i < computers.length; i++) {
      if(typeof computers[i].available === "undefined"){
        computers[i].available = defaultProps.available;
      }
      if(!computers[i].user){
        computers[i].user = defaultProps.user;
      }
      if(!computers[i].os){
        computers[i].os = defaultProps.os;
      }
      if(!computers[i].available){
        dispo = "Occupé";
      } else {
        dispo = "Disponible";
      }
      if(computers[i].user === null){
        user = "N/A";
      } else {
        user = computers[i].user;
      }
      resultat += "<ul><li>id : "+computers[i].id+"</li><li>"+dispo+"</li><li>OS : "+computers[i].os+"</li><li>Utilisateur : "+user+"</li></ul>"
    }

    document.getElementById("demo").innerHTML = resultat;
  });
})();
