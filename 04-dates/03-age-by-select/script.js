/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    var currentDate = new Date()

    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth()+1;
    var currentDay = currentDate.getDate();

    var userYear = parseInt(document.getElementById("dob-year").value);
    var userMonth = parseInt(document.getElementById("dob-month").value);
    var userDay = parseInt(document.getElementById("dob-day").value);

    if (currentMonth > userMonth) {
      document.getElementById("demo").innerHTML = currentYear - userYear;
    } else if (currentMonth == userMonth && currentDay >= userDay) {
      document.getElementById("demo").innerHTML = (currentYear - userYear);
    } else {
      document.getElementById("demo").innerHTML = (currentYear - userYear) - 1;
    }
  });
})();
