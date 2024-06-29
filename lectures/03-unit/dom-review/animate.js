const imgContainer = document.querySelector('.img-container');


console.dir(imgContainer);

imgContainer.addEventListener('click', event => {
  const target = event.target;
  const state = target.getAttribute('data-state')

console.log(target.matches("img"));
if(target.matches("img")) {

  if (state === 'still') {
    // console.log('hit');
    target.setAttribute('data-state', 'animate');
    target.setAttribute('src', target.getAttribute('data-animate'));
    console.log(target.getAttribute('data-state'));
  } else if (state === 'animate') {
    target.setAttribute("data-state", "still");
    target.setAttribute("src", target.getAttribute("data-still"))
    console.log(target.getAttribute('data-state'));
  }
}

})