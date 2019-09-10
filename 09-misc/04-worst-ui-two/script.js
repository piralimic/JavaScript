/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let partOne = document.getElementById('part-one').innerHTML;
    let partOneMax = document.getElementById('part-one').getAttribute('data-max');

    let partTwo = document.getElementById('part-two').innerHTML;
    let partTwoMax = document.getElementById('part-two').getAttribute('data-max');

    let partThree = document.getElementById('part-three').innerHTML;
    let partThreeMax = document.getElementById('part-three').getAttribute('data-max');

    let partFour = document.getElementById('part-four').innerHTML;
    let partFourMax = document.getElementById('part-four').getAttribute('data-max');

    document.getElementById("part-one").addEventListener("click", () => {
      partOne = document.getElementById('part-one').innerHTML;
      if (partOne < partOneMax) {
        partOne++;
        document.getElementById('part-one').innerHTML = partOne;
      } else {
        partOne = document.getElementById('part-one').getAttribute('data-min');
        document.getElementById('part-one').innerHTML = document.getElementById('part-one').getAttribute('data-min');
      }
      document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
    });

    document.getElementById("part-two").addEventListener("click", () => {
      partTwo = document.getElementById('part-two').innerHTML;
      if (partTwo < partTwoMax) {
        partTwo++;
        if (partTwo < 10) {
          partTwo = "0"+partTwo;
          document.getElementById('part-two').innerHTML = partTwo;
        } else {
          document.getElementById('part-two').innerHTML = partTwo;
        }
      } else {
        partTwo = document.getElementById('part-two').getAttribute('data-min');
        document.getElementById('part-two').innerHTML = document.getElementById('part-two').getAttribute('data-min');
      }
      document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
    });

    document.getElementById("part-three").addEventListener("click", () => {
      partThree = document.getElementById('part-three').innerHTML;
      if (partThree < partThreeMax) {
        partThree++;
        if (partThree < 10) {
          partThree = "0"+partThree;
          document.getElementById('part-three').innerHTML = partThree;
        } else {
          document.getElementById('part-three').innerHTML = partThree;
        }
      } else {
        partThree = document.getElementById('part-three').getAttribute('data-min');
        document.getElementById('part-three').innerHTML = document.getElementById('part-three').getAttribute('data-min');
      }
      document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
    });

    document.getElementById("part-four").addEventListener("click", () => {
      partFour = document.getElementById('part-four').innerHTML;
      if (partFour < partFourMax) {
        partFour++;
        if (partFour < 10) {
          partFour = "0"+partFour;
          document.getElementById('part-four').innerHTML = partFour;
        } else {
          document.getElementById('part-four').innerHTML = partFour;
        }
      } else {
        partFour = document.getElementById('part-four').getAttribute('data-min');
        document.getElementById('part-four').innerHTML = document.getElementById('part-four').getAttribute('data-min');
      }
      document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
    });


})();
