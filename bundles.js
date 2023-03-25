//Slider e slider automatico

const imgs = document.querySelector('.slides');
let pos = 0;
let efeito;
let efeito2;
const avance = document.getElementById('avance');
function efect() {
  pos = 0;
  imgs.style.transition = '.0s'
  imgs.style.transform = `translateX(${0}%)`;
  p0.classList.add('navSection');
  p1.classList.remove('navSection');
  p2.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');
}



function carrossel() {
  pos++;
  imgs.style.transition = '.4s'

  if (pos == 1) {
    imgs.style.transition = '.4s'
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    efeito = 1;
    p0.classList.remove('navSection');
    p1.classList.add('navSection');
    p2.classList.remove('navSection');
    p3.classList.remove('navSection');
    p4.classList.remove('navSection');
  }
  if (pos == 2) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p2.classList.add('navSection');
    p1.classList.remove('navSection');
    p3.classList.remove('navSection');
    p4.classList.remove('navSection');
    p0.classList.remove('navSection');
  }
  if (pos == 3) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p3.classList.add('navSection');
    p1.classList.remove('navSection');
    p2.classList.remove('navSection');
    p4.classList.remove('navSection');
    p0.classList.remove('navSection');
  }
  if (pos == 4) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p4.classList.add('navSection');
    p1.classList.remove('navSection');
    p3.classList.remove('navSection');
    p2.classList.remove('navSection');
    p0.classList.remove('navSection');
  }
  if (pos == 5) {
    efeito = 2;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p1.classList.remove('navSection');
    p3.classList.remove('navSection');
    p4.classList.remove('navSection');
    p2.classList.remove('navSection');
    p0.classList.remove('navSection');
  }
  if (efeito === 2) {
    imgs.addEventListener('transitionend', efect);
  } else {
    imgs.removeEventListener('transitionend', efect);
  }
}
setInterval(carrossel, 3000);

//navbar1

const p0 = document.querySelector('.p0');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
p0.addEventListener('click', () => {
  pos = 0;
  efeito2 = 1
  imgs.style.transform = `translateX(${0}%)`;
  p0.classList.add('navSection');
  p1.classList.remove('navSection');
  p2.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');

  imgs.style.transition = '0s'
});
p1.addEventListener('click', () => {
  pos = 1;
  efeito2 = 1
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p0.classList.remove('navSection');
  p1.classList.add('navSection');
  p2.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');

  imgs.style.transition = '0s'
});
p2.addEventListener('click', () => {
  pos = 2;
  efeito2 = 1
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p2.classList.add('navSection');
  p1.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');
  p0.classList.remove('navSection');

  imgs.style.transition = '0s'
});
p3.addEventListener('click', () => {
  pos = 3;
  efeito2 = 1
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p3.classList.add('navSection');
  p1.classList.remove('navSection');
  p2.classList.remove('navSection');
  p4.classList.remove('navSection');
  p0.classList.remove('navSection');

  imgs.style.transition = '0s'
});
p4.addEventListener('click', () => {
  pos = 4;
  efeito2 = 2
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p4.classList.add('navSection');
  p1.classList.remove('navSection');
  p3.classList.remove('navSection');
  p2.classList.remove('navSection');
  p0.classList.remove('navSection');

  imgs.style.transition = '0s'

})



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

