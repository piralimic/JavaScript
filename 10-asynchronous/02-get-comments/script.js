/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  function callbackFunction(error, tableArticles) {
    if (error === null) {
      tableArticles.forEach(function(article) {
        console.log(article.id);
        window.lib.getComments(article.id, function(error, tabComment) {
          console.log(tabComment);
          article.comments = tabComment;
        })
      })
      return console.table(tableArticles);
    } else {
      return console.log("ERROR : This is Sparta !");
    }
  }

  /*
  https://www.w3schools.com/js/js_htmldom_eventlistener.asp

  Passing Parameters > JavaScript HTML DOM EventListener

  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Event_listener_with_anonymous_function
  */

  document.getElementById('run').addEventListener("click", function() {window.lib.getPosts(callbackFunction); });

})();
