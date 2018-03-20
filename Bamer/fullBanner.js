let wat    = document.querySelector('.fb__wat');
let weet   = document.querySelector('.fb__weet');
let Thom = document.querySelector('.fb__Thom');
let ballon = document.querySelector('.fb__ballon');
let waggel = document.querySelector('.fb__waggel');
let laag1  = document.querySelector('.fb__laag1');
let tuts   = document.querySelector('.fb__tut');
let html   = document.querySelector('.fb__html');
let css   = document.querySelector('.fb__css');
let js   = document.querySelector('.fb__js');

const animeren = () => {
  setTimeout( () => {wat.classList.remove('fb--uit')}, 1);
  setTimeout( () => {weet.classList.remove('fb--uit')}, 300);
  setTimeout( () => {Thom.classList.remove('fb--uit')}, 600);
  setTimeout( () => {ballon.classList.remove('fb--uit')}, 900);
  setTimeout( () => {waggel.classList.add('fb--waggel')}, 1000);
  // over naar laag 2
  setTimeout( () => {laag1.classList.add('fb--uit')}, 1800);
  setTimeout( () => {tuts.classList.add('fb--uit')}, 2000);
  setTimeout( () => {html.classList.remove('fb--uit')}, 2300);
  setTimeout( () => {css.classList.remove('fb--uit')}, 2600);
  setTimeout( () => {js.classList.remove('fb--uit')}, 2900);

  //terug naar laag 1
  setTimeout( () => terugzetten1(), 3500);
  setTimeout( () => {laag1.classList.remove('fb--uit')}, 4000);
  setTimeout( () => terugzetten2(), 400);
}
const terugzetten1 = () => {
  wat.classList.add('fb--uit');
  weet.classList.add('fb--uit');
  Thom.classList.add('fb--uit');
  ballon.classList.add('fb--uit');
  waggel.classList.remove('fb--waggel');
}
const terugzetten2 = () => {
  tuts.classList.remove('fb--uit');
  html.classList.add('fb--uit');
  css.classList.add('fb--uit');
  js.classList.add('fb--uit');
}
animeren();

setInterval( () => animeren(), 4000);

// banner linken
const gaNaarPagina = () => window.open('http://www.thomrustemeijer.nl/', '_blank')
document.querySelector('.fb').addEventListener('click', gaNaarPagina);
