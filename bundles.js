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
  p0.classList.add('pAtual');
  p1.classList.remove('pAtual');
  p2.classList.remove('pAtual');
  p3.classList.remove('pAtual');
  p4.classList.remove('pAtual');
  imgs.classList.add('transistion');
});
p1.addEventListener('click', () => {
  pos = 1;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p0.classList.remove('pAtual');
  p1.classList.add('pAtual');
  p2.classList.remove('pAtual');
  p3.classList.remove('pAtual');
  p4.classList.remove('pAtual');
  p5.classList.remove('pAtual');
});
p2.addEventListener('click', () => {
  pos = 2;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p2.classList.add('pAtual');
  p1.classList.remove('pAtual');
  p3.classList.remove('pAtual');
  p4.classList.remove('pAtual');
  p5.classList.remove('pAtual');
  p0.classList.remove('pAtual');
});
p3.addEventListener('click', () => {
  pos = 3;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p3.classList.add('pAtual');
  p1.classList.remove('pAtual');
  p2.classList.remove('pAtual');
  p4.classList.remove('pAtual');
  p5.classList.remove('pAtual');
  p0.classList.remove('pAtual');
});
p4.addEventListener('click', () => {
  pos = 4;
  imgs.style.transform = `translateX(${-pos * 100}%)`;
  p4.classList.add('pAtual');
  p1.classList.remove('pAtual');
  p3.classList.remove('pAtual');
  p2.classList.remove('pAtual');
  p5.classList.remove('pAtual');
  p0.classList.remove('pAtual');
});

// ajuste

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

// ajuste btn

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

// ajuste h2
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

//Slider2
let pos2 = 0;
const arrow1 = document.querySelector('.figure1');
const arrow2 = document.querySelector('.figure2');
const imgs2 = document.querySelector('.slides2');
let infintR = false;
function infintRight() {
  pos2 = 0;
  imgs2.classList.remove('transistion2');
  imgs2.style.transform = `translateX(${-282}px)`;
}
arrow2.addEventListener('click', () => {
  pos2++;
  if (pos2 == 1) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${2 * -282}px)`;
    infintR = false;
  } else if (pos2 == 2) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${3 * -282}px)`;
    infintR = false;
  } else if (pos2 == 3) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${4 * -283}px)`;
    infintR = false;
  } else if (pos2 == 4) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${5 * -283}px)`;
    infintR = false;
  } else if (pos2 == 5) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${6 * -283}px)`;
    infintR = true;
  }
  if (infintR == true) {
    imgs2.addEventListener('transitionend', infintRight);
    imgs2.removeEventListener('transitionend', infintLeft);
  } else {
    imgs2.removeEventListener('transitionend', infintRight);
  }
});
let infintL = false;
function infintLeft() {
  imgs2.classList.remove('transistion2');
  imgs2.style.transform = `translateX(${5 * -282}px)`;
  pos2 = 4;
}
arrow1.addEventListener('click', () => {
  if (pos2 == 0) {
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${0}px)`;
    infintL = true;
  }
  if (pos2 == 1) {
    infintL = false;
    imgs2.classList.add('transistion2');
    imgs2.style.transform = `translateX(${-282}px)`;
    pos2 = 0;
  } else if (pos2 == 2) {
    imgs2.style.transform = `translateX(${2 * -282}px)`;
    pos2 = 1;
    infintL = false;
  } else if (pos2 == 3) {
    imgs2.style.transform = `translateX(${3 * -282}px)`;
    pos2 = 2;
    infintL = false;
    imgs2.classList.add('transistion2');
  } else if (pos2 == 4) {
    imgs2.style.transform = `translateX(${4 * -282}px)`;
    pos2 = 3;
    infintL = false;
    imgs2.classList.add('transistion2');
  } else if (pos2 == 5) {
    imgs2.style.transform = `translateX(${5 * -282}px)`;
    pos2 = 4;
    imgs2.classList.add('transistion2');
    infintL = false;
  }
  if (infintL == true) {
    imgs2.addEventListener('transitionend', infintLeft);
    imgs2.removeEventListener('transitionend', infintRight);
  } else {
    imgs2.removeEventListener('transitionend', infintLeft);
  }
});
const mobile = document.querySelector('.mobile');
const burguer = document.querySelector('.burguer');
const moba = document.querySelector('.moba');
mobile.addEventListener('click', () => {
  burguer.classList.toggle('close');
  moba.classList.toggle('open');
});

//slider mobile
const arrow1M = document.querySelector('.figure1M');
const arrow2M = document.querySelector('.figure2M');
const imgs2M = document.querySelector('.slides2Moba');
let index = 0;
arrow2M.addEventListener('click', () => {
  index++;
  imgs2M.style.transform = `translateX(-${index * 284}px)`;
  if (index == 5) {
    index = 0
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


