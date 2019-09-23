/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  // https://www.codingame.com/playgrounds/482/javascript-async-and-await-keywords/a-first-example
  async function afficherLesArticles() {
    let tableauArticles = await window.lib.getPosts();
    console.table(tableauArticles);
  }

  document.getElementById('run').addEventListener("click", () => {
    afficherLesArticles();

  });
})();
