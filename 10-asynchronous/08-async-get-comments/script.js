/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  async function afficherLesArticles() {
    let tableauArticles = await window.lib.getPosts();
    // console.table(tableauArticles);
      for (const article of tableauArticles){
        let tableauCommentaires = await window.lib.getComments(article.id);
        article.comments = tableauCommentaires;
      }
      console.log(tableauArticles);
    }

  document.getElementById('run').addEventListener("click", () => {
    afficherLesArticles();


  });
})();
