/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const myTable = document.createElement("table");
    const tableInTarget = document.getElementById("target").appendChild(myTable);
    tableInTarget.setAttribute("class", "table");

    const tableT = document.querySelector(".table");

    for(let i = 1; i <= 10; i++){
        const tableRow = document.createElement("tr");
        const tableData = document.createElement("td");
        tableT.appendChild(tableRow).appendChild(tableData).innerHTML = `row ${i}`;
    }
})();
