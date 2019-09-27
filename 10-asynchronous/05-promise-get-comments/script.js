/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // https://javascript.developpez.com/actu/146280/Comprendre-les-Promises-en-JavaScript-TypeScript-article-de-yahiko/

    // AU LIEU D'UTILISER UN compteur COMME DANS EXERCICE 02 il faut utiliser PROMISE.all

    document.getElementById('run').addEventListener("click", () => {
      window.lib.getPosts().then(
      tableauArticles => { // resolve()
        tableauArticles.forEach(function(article){
          // console.log(article.id);
          window.lib.getComments(article.id).then(
            tableauCommentaires => { // resolve()
              //console.table(tableauCommentaires);
              article.comments = tableauCommentaires;
              return window.lib.getComments();
            }
          )
        })
        console.log(tableauArticles);
        return window.lib.getPosts();
      }
    )
    });
  })();
