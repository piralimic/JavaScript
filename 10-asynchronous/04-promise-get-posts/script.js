/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses
  document.getElementById('run').addEventListener("click", () => {

    /*
    //avec une fonction fléchée
    window.lib.getPosts().then(
    tableauArticles => { // resolve()
      console.table(tableauArticles);
      return window.lib.getPosts();
    }
  )
    */


    //avec une simple fonction anonyme
    window.lib.getPosts().then(function(tableauArticles) { // resolve()
      console.table(tableauArticles);
    }
  )


});
})();
