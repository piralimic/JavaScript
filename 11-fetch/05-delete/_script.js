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
  document.getElementById('run').addEventListener("click", async () => {
    try {
      const response = await fetch('http://localhost:3000/heroes/' + document.getElementById("hero-id").value, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      });

      if (response.ok) {
        console.log("L'élément a été supprimé");
      } else if (response.status == 404) {
        console.log("L'élément n'existe pas");
      }

    } catch (e) {
      console.error(e.message);
    } finally {

    }

  });
})();
