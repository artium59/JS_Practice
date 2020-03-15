const title = document.querySelector('#title');
title.innerHTML = "HI! from JS";
document.title = 'I own you now.';

const CLICKED_CLASS = 'clicked';

function handleClick() {
    /* const hasClass = title.classList.contains(CLICKED_CLASS);

    if (!hasClass)
        title.classList.add(CLICKED_CLASS);
    else
        title.classList.remove(CLICKED_CLASS); */

    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

/*
const age = prompt("How old are you?");

if (age >= 18 && age <= 21)
    console.log("You can drink but you should not");
else if (age > 21)
    console.log("Go ahead");
else
    console.log("Too young");
*/

/*
function handleOffline() {
    console.log("Wi-Fi off");
}

function handleOnline() {
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
 */
