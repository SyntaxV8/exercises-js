/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").onclick = function () {

        let day = document.getElementById("dob-day")
        let month = document.getElementById("dob-month")
        let year = document.getElementById("dob-year")

        let birthday = new Date(year.value, month.value, day.value);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        let age = Math.abs(ageDate.getUTCFullYear()-1970);

        confirm( "Is this your age?\n" + age)

    }



})();

