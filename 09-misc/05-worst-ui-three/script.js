/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let speedTyping = 100; /* The speed/duration of the effect in milliseconds */
  let currentPartOne;
  let currentPartTwo;
  let currentPartThree;
  let currentPartFour;
  let buttonOne = true;
  let buttonTwo = true;
  let buttonThree = true;
  let buttonFour = true;

  document.getElementById("fix-part-one").addEventListener("click", () => {
    if (buttonOne == true) {
      buttonOne = false;
      document.getElementById('fix-part-one').innerHTML = "Start";
    } else {
      buttonOne = true;
      document.getElementById('fix-part-one').innerHTML = "Stop";
    }
  });

  document.getElementById("fix-part-two").addEventListener("click", () => {
    if (buttonTwo == true) {
      buttonTwo = false;
      document.getElementById('fix-part-two').innerHTML = "Start";
    } else {
      buttonTwo = true;
      document.getElementById('fix-part-two').innerHTML = "Stop";
    }
  });

  document.getElementById("fix-part-three").addEventListener("click", () => {
    if (buttonThree == true) {
      buttonThree = false;
      document.getElementById('fix-part-three').innerHTML = "Start";
    } else {
      buttonThree = true;
      document.getElementById('fix-part-three').innerHTML = "Stop";
    }
  });

  document.getElementById("fix-part-four").addEventListener("click", () => {
    if (buttonFour == true) {
      buttonFour = false;
      document.getElementById('fix-part-four').innerHTML = "Start";
    } else {
      buttonFour = true;
      document.getElementById('fix-part-four').innerHTML = "Stop";
    }
  });

  function firstRoulette() {
    currentPartOne = document.getElementById('part-one').getAttribute('value');
    if (buttonOne) {
      if (currentPartOne == document.getElementById('part-one').getAttribute('data-max')) {
        currentPartOne = document.getElementById('part-one').getAttribute('data-min');
      } else {
        currentPartOne++;
      }
    }

    if (buttonTwo) {
      currentPartTwo = document.getElementById('part-two').getAttribute('value');
      if (currentPartTwo == document.getElementById('part-two').getAttribute('data-max')) {
        currentPartTwo = document.getElementById('part-two').getAttribute('data-min');
      } else {
        currentPartTwo++;
      }
      if (currentPartTwo < 10 && currentPartTwo > 0) {
        currentPartTwo = "0" + currentPartTwo;
      }
    }

    if (buttonThree) {
      currentPartThree = document.getElementById('part-three').getAttribute('value');
      if (currentPartThree == document.getElementById('part-three').getAttribute('data-max')) {
        currentPartThree = document.getElementById('part-three').getAttribute('data-min');
      } else {
        currentPartThree++;
      }
      if (currentPartThree < 10 && currentPartThree > 0) {
        currentPartThree = "0" + currentPartThree;
      }
    }

    if (buttonFour) {
      currentPartFour = document.getElementById('part-four').getAttribute('value');
      if (currentPartFour == document.getElementById('part-four').getAttribute('data-max')) {
        currentPartFour = document.getElementById('part-four').getAttribute('data-min');
      } else {
        currentPartFour++;
      }
      if (currentPartFour < 10 && currentPartFour > 0) {
        currentPartFour = "0" + currentPartFour;
      }
    }

    document.getElementById("target").innerHTML = "+" + currentPartOne + currentPartTwo + currentPartThree + currentPartFour;

    document.getElementById('part-one').setAttribute('value', currentPartOne);
    document.getElementById('part-two').setAttribute('value', currentPartTwo);
    document.getElementById('part-three').setAttribute('value', currentPartThree);
    document.getElementById('part-four').setAttribute('value', currentPartFour);

    setTimeout(firstRoulette, speedTyping);
  }

  firstRoulette();
})();
