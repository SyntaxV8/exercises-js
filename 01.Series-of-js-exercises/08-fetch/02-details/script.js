/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener('click', function Hero () {
        let inputID = document.getElementById("hero-id").value;

        fetch('http://localhost:63342/01.Series-of-js-exercises/_shared/api.json')
            .then (response => { return response.json()})
            .then(data => {
                let hero = data.heroes.find(findHero=>findHero.id == inputID);
                let templateClone = document.getElementById("tpl-hero").content.cloneNode(true);
                document.getElementById('target').appendChild(templateClone);
                document.querySelector('#target .name').innerHTML = hero.name;
                document.querySelector('#target .alter-ego').innerHTML = hero.alterEgo;
                document.querySelector('#target .powers').innerHTML = hero.abilities;

            })
    })


})();
