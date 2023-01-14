const title = document.querySelector('h1');
const form = document.querySelector('#form');
const calc1 = document.querySelector('#calculation1');
const calc2 = document.querySelector('#calculation2');
const btn = document.querySelector('#calculation-btn');
const result = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    result.innerHTML = (Number(calc1.value) + Number(calc2.value));
};