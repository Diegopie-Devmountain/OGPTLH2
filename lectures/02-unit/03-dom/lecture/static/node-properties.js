/// ////// innerText /////////

const fruits = document.querySelector('#innerText-example');

console.log(fruits.innerText);
// apple
// berry
// cherry

fruits.innerText = 'no fruits';

/// ////// innerHTML /////////

const veggies = document.querySelector('#innerHTML-example');

console.log(veggies.innerHTML);
// <li>artichoke</li>
// <li>broccoli</li>
// <li>cabbage</li>

veggies.innerHTML = '<li>daikon</li>';

/// ///// get/set attributes ///////

const catPhoto = document.querySelector('img');

console.log(catPhoto.getAttribute('src'));
catPhoto.setAttribute('src', 'static/cat2.gif');

/// ///// class /////////////

const p = document.querySelector('#class-example');

p.className = 'red bold';

p.classList.remove('bold');
console.log(p.classList.contains('bold')); // false

p.classList.toggle('red');

/// ///// style /////////////

const button = document.querySelector('#style-example');

button.style.backgroundColor = 'pink';

/// //// remove ////////////

const button2 = document.querySelector('#remove-example');

button2.remove();

/// //// value ////////////

const input = document.querySelector('#value-example');
input.value = 'Email:';
