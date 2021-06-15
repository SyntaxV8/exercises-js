/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let operant1 = document.getElementById("op-one").value
        let operant2 = document.getElementById("op-two").value
        let solution = parseInt(operant1) + parseInt(operant2);
        alert("The solution is " + solution)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let operant1 = document.getElementById("op-one").value
        let operant2 = document.getElementById("op-two").value
        let solution = operant1 - operant2;
        alert("The solution is " + solution)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let operant1 = document.getElementById("op-one").value
        let operant2 = document.getElementById("op-two").value
        let solution = operant1 * operant2;
        alert("The solution is " + solution)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let operant1 = document.getElementById("op-one").value
        let operant2 = document.getElementById("op-two").value
        let solution = operant1 / operant2;
        alert("The solution is " + solution)
    });
})();
