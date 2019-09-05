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
    var userYear = document.getElementById("year").value;
    var checkDay = 13; // jour du mois
    var checkDayOfTheWeek = 5; // vendredi
    var checkDate = new Date();
    var resultat = "";
    var frenchMonth = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    for (var i = 0; i < 12; i++){
        checkDate = new Date(userYear,i,checkDay);
        if (checkDate.getDay()==5);{
            resultat += frenchMonth[i]+" ";
        }
    }


    document.getElementById("demo").innerHTML = resultat;

})();
