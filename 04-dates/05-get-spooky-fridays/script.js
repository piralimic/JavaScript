/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var userDate = new Date(document.getElementById("year").value)

    var userYear = userDate.getFullYear();
    var userMonth = userDate.getMonth();
    var userDay = userDate.getDate();
    var userDayOfTheWeek = userDate.getDay();
    var userHour = userDate.getHours();
    var userMinute = userDate.getMinutes();

    var frenchDay = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var frenchMonth = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    document.getElementById("target").innerHTML = frenchDay[currentDayOfTheWeek]+" "+currentDay+" "+frenchMonth[currentMonth]+" "+currentYear+", "+currentHour+"h"+currentMinute;

})();
