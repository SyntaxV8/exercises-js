/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here

    let cake1 = prompt("Do you want some cake?");

    if (cake1 == "yes"){
        alert('Congrats the cake is a lie!');
    } else {
        alert ('The cake is still a lie!');
    }
})();