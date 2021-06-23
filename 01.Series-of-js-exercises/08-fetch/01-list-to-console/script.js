/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async () => {
    let data = await fetch('http://localhost:63342/01.Series-of-js-exercises/_shared/api.json')
    let main = await data.json();

    console.log(main)
})();

thenFunction = () => {
    fetch('http://localhost:63342/01.Series-of-js-exercises/_shared/api.json')
        .then (response => response.json())
        .then(data => console.log(data));
}

thenFunction();