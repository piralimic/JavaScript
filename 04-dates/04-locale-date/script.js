/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    var currentDate = new Date()

    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var currentDayOfTheWeek = currentDate.getDay();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();

    var frenchDay = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var frenchMonth = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    document.getElementById("target").innerHTML = frenchDay[currentDayOfTheWeek]+" "+currentDay+" "+frenchMonth[currentMonth]+" "+currentYear+", "+currentHour+"h"+currentMinute;

})();
