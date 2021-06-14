/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function agt() {

    // your code here

    let age = prompt("how old are you?")
    let gender = prompt("What is your gender?")
    let town = prompt('where do you live?')

    let confirm1 = confirm("Are you " + age + " years old?\nAre you a " + gender + "?\nDo you live in " + town + "?");

    if (confirm1 === true) {
       alert("Ok thanks!")
    } else {
        agt()
    }
})();


