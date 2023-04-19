//Slider e slider automatico




//Slider2 infinito

let pos2 = 0;
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const slides2 = document.querySelector('.slides2');


function next() {
  let $firstSlide = document.querySelectorAll('.cards')[0];
  slides2.style.marginLeft = 'calc(2 * -280px)'
  slides2.style.transition = "margin-left 1s";
  setTimeout(() => {
    slides2.style.transition = "none";
    slides2.insertAdjacentElement("beforeend", $firstSlide)
    slides2.style.marginLeft = "-280px"
  }, 0)
}

function prev() {
  let cards = document.querySelectorAll('.cards');
  let lastSlider = cards[cards.length - 1];
  slides2.style.marginLeft = "0px";
  slides2.style.transition = "margin-left 1s";
  setTimeout(() => {
    slides2.style.transition = "1s";
    slides2.insertAdjacentElement("afterbegin", lastSlider)
    slides2.style.marginLeft = "-280px"
  }, 0);

}


arrow2.addEventListener('click', () => {
  next()
})
arrow1.addEventListener('click', () => {
  prev()
})

//Slider2 infinito







//Menu mobile

const mobile = document.querySelector('.mobile');
const burguer = document.querySelector('.burguer');
const moba = document.querySelector('.moba');
mobile.addEventListener('click', () => {
  burguer.classList.toggle('close');
  moba.classList.toggle('open');
});

//Menu mobile





//slider mobile

const arrow1M = document.querySelector('.arrow1M');
const arrow2M = document.querySelector('.arrow2M');
const imgs2M = document.querySelector('.slides2Mobile');
let index = 0;
arrow2M.addEventListener('click', () => {


  if (index == 4) {
    index = 0;
    imgs2M.style.transform = `translateX(-${0}px)`;
  } else if (index == 0) {
    index = 1
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if (index == 1) {
    index = 2
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if (index == 2) {
    index = 3
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if (index == 3) {
    index = 4
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
});
arrow1M.addEventListener('click', () => {
  if (index == 0) {
    index = 4;
  } else if (index == 1) {
    index = 0;
  } else if (index == 2) {
    index = 1;
  } else if (index == 3) {
    index = 2;
  } else if (index == 4) {
    index = 3;
  }
  imgs2M.style.transform = `translateX(-${index * 284}px)`;
});

//slider mobile

