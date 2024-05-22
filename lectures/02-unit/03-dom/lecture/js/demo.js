// console.dir(document.body.children);


const h1 = document.querySelector('h1')
h1.innerText = "Change the Dom"

// console.dir(h1);

h1.innerText = "Changed AGain"


// ---

const fruits = ['apple', 'berry', 'cherry'];

fruits.forEach( (item) => {
  let p = document.createElement('p');

  p.innerText = item

  // console.log(p);
  // console.dir(p);

  document.body.appendChild(p)
} )


// console.log(document.querySelectorAll('li'));
// console.dir(document.querySelectorAll('li'));

const allBullets = document.querySelectorAll('li');

allBullets.forEach( (bullet) => {
  // console.log(bullet);
  // console.dir(bullet);
})

// console.log(document.getElementById('text'));
// console.log(document.getElementsByClassName('flex-center'));

const listContainer = document.querySelector('ul');


const text = 'New Better List'

listContainer.innerHTML = 
`<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
<li>New <span style="color: red;">List</span></li>`

const image = document.querySelector('#image');

// param1 = what attribute, 
// param2 = value
image.setAttribute('src', './hacker.jpg')
// image.setAttribute('style', 'height: 8rem')
image.setAttribute('class', 'flex-center')

image.style.height = '8rem'

// console.dir(document.querySelector('#image').parentNode);


const clickButton = document.getElementById('click');

clickButton.addEventListener('click', (event) => {
  console.log(event.target);
  console.log('Clicked!');

  event.target.style.color = 'green'

})


const submit = (event) => {
  console.log(event);
  console.log('Hello from onclick');
}

console.log(clickButton);


