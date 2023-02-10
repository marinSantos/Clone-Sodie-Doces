//Slider e slider automatico

const imgs = document.querySelector('.slides');
let pos = 0;
let efeito;
const avance = document.getElementById('avance');
function efect() {
  pos = 0;
  imgs.classList.remove('transistion');
  imgs.style.transform = `translateX(${pos * 100}%)`;
  p0.classList.add('pAtual');
  p1.classList.remove('pAtual');
  p2.classList.remove('pAtual');
  p3.classList.remove('pAtual');
  p4.classList.remove('pAtual');
}
function carrossel() {
  pos++;
  if (pos == 1) {
    imgs.classList.add('transistion');
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    efeito = 1;
    p0.classList.remove('pAtual');
    p1.classList.add('pAtual');
    p2.classList.remove('pAtual');
    p3.classList.remove('pAtual');
    p4.classList.remove('pAtual');
  }
  if (pos == 2) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p2.classList.add('pAtual');
    p1.classList.remove('pAtual');
    p3.classList.remove('pAtual');
    p4.classList.remove('pAtual');
    p0.classList.remove('pAtual');
  }
  if (pos == 3) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p3.classList.add('pAtual');
    p1.classList.remove('pAtual');
    p2.classList.remove('pAtual');
    p4.classList.remove('pAtual');
    p0.classList.remove('pAtual');
  }
  if (pos == 4) {
    efeito = 1;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p4.classList.add('pAtual');
    p1.classList.remove('pAtual');
    p3.classList.remove('pAtual');
    p2.classList.remove('pAtual');
    p0.classList.remove('pAtual');
  }
  if (pos == 5) {
    efeito = 2;
    imgs.style.transform = `translateX(${-pos * 100}%)`;
    p1.classList.remove('pAtual');
    p3.classList.remove('pAtual');
    p4.classList.remove('pAtual');
    p2.classList.remove('pAtual');
    p0.classList.remove('pAtual');
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
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p0.classList.add('navSection');
  p1.classList.remove('navSection');
  p2.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');
  imgs.classList.add('transistion');
});
p1.addEventListener('click', () => {
  pos = 1;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p0.classList.remove('navSection');
  p1.classList.add('navSection');
  p2.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');
  p5.classList.remove('navSection');
});
p2.addEventListener('click', () => {
  pos = 2;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p2.classList.add('navSection');
  p1.classList.remove('navSection');
  p3.classList.remove('navSection');
  p4.classList.remove('navSection');
  p5.classList.remove('navSection');
  p0.classList.remove('navSection');
});
p3.addEventListener('click', () => {
  pos = 3;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p3.classList.add('navSection');
  p1.classList.remove('navSection');
  p2.classList.remove('navSection');
  p4.classList.remove('navSection');
  p5.classList.remove('navSection');
  p0.classList.remove('navSection');
});
p4.addEventListener('click', () => {
  pos = 4;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p4.classList.add('navSection');
  p1.classList.remove('navSection');
  p3.classList.remove('navSection');
  p2.classList.remove('navSection');
  p5.classList.remove('navSection');
  p0.classList.remove('navSection');
});

// ajuste




// desativar o hover das imagens ao passar o mouse em seus elementos

const btn1 = document.getElementById('btn1');
const img1 = document.getElementById('img1');
const btn2 = document.getElementById('btn2');
const img2 = document.getElementById('img2');
const btn3 = document.getElementById('btn3');
const img3 = document.getElementById('img3');
const btn4 = document.getElementById('btn4');
const img4 = document.getElementById('img4');
const h2_1 = document.getElementById('h2_1');
const h2_2 = document.getElementById('h2_2');
const h2_3 = document.getElementById('h2_3');
const h2_4 = document.getElementById('h2_4');

btn1.addEventListener('mouseover', function () {
  img1.classList.add('ajuste');
});
btn1.addEventListener('mouseleave', function () {
  img1.classList.remove('ajuste');
});
btn2.addEventListener('mouseover', function () {
  img2.classList.add('ajuste');
});
btn2.addEventListener('mouseleave', function () {
  img2.classList.remove('ajuste');
});
btn3.addEventListener('mouseover', function () {
  img3.classList.add('ajuste');
});
btn3.addEventListener('mouseleave', function () {
  img3.classList.remove('ajuste');
});
btn4.addEventListener('mouseover', function () {
  img4.classList.add('ajuste');
});
btn4.addEventListener('mouseleave', function () {
  img4.classList.remove('ajuste');
});

h2_1.addEventListener('mouseover', function () {
  img1.classList.add('ajuste');
});
h2_1.addEventListener('mouseleave', function () {
  img1.classList.remove('ajuste');
});
h2_2.addEventListener('mouseover', function () {
  img2.classList.add('ajuste');
});
h2_2.addEventListener('mouseleave', function () {
  img2.classList.remove('ajuste');
});
h2_3.addEventListener('mouseover', function () {
  img3.classList.add('ajuste');
});
h2_3.addEventListener('mouseleave', function () {
  img3.classList.remove('ajuste');
});
h2_4.addEventListener('mouseover', function () {
  img4.classList.add('ajuste');
});
h2_4.addEventListener('mouseleave', function () {
  img4.classList.remove('ajuste');
});

//Desativar o hover das imagens ao passar o mouse em seus elementos


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
  }, 700)
}

function prev() {
  let cards = document.querySelectorAll('.cards');
  let lastSlider = cards[cards.length -1];
  slides2.style.marginLeft = "0px";
  slides2.style.transition = "margin-left 1s";
  setTimeout(() => {
      slides2.style.transition = "none";
      slides2.insertAdjacentElement("afterbegin", lastSlider)
      slides2.style.marginLeft = "-280px"
  }, 700);

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
  }else if(index == 0){
    index = 1
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if(index == 1){
    index = 2
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if(index == 2){
    index = 3
    imgs2M.style.transform = `translateX(-${index * 284}px)`;
  }
  else if(index == 3){
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

