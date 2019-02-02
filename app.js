let container_main = document.querySelector('#container');
let newbox_btn = document.querySelector('#new-btn');
let default_btn = document.querySelector('#default-btn');
let clear_btn = document.querySelector('#clear-btn');
let random_btn = document.querySelector('#random-btn');
let toggle_btn = document.getElementById('color-toggle');
let defaultColor = '#1795b4';
let defaultSqrSize = 16;
let colored = 0;


function colorSqr() {
  if (colored == 0) {
    this.style.backgroundColor = defaultColor;
  } else {
    this.style.backgroundColor = getRandColor();
  }
}

function getRandColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let alpha = Math.round((Math.random() * 1.1) * 10) / 10;
  let rgba = `rgba(${red},${green},${blue},${alpha})`;
  return rgba;
}

function etchSketch(sqrSize) {
  var totalSqr = sqrSize * sqrSize;
  for (let i = 0; i < totalSqr; i++) {
    let grids = document.createElement('div');
    grids.classList.add('grid');
    container_main.appendChild(grids);
    grids.addEventListener('mouseover', colorSqr);
  }

  container_main.style.setProperty(`grid-template-columns`, `repeat(${sqrSize},1fr)`);
  container_main.style.setProperty(`grid-template-rows`, `repeat(${sqrSize},1fr)`);

}

clear_btn.addEventListener('click', clearEtch);

function clearEtch() {
  grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.style.backgroundColor = `#fff`);
}

newbox_btn.addEventListener('click', newEtch);

function newEtch() {
  while (container_main.firstChild) {
    container_main.removeChild(container_main.firstChild);
  }
  let newSize = prompt('How many squares would you like?');
  etchSketch(newSize);
}

toggle_btn.addEventListener('click', checkChangeColor);

function checkChangeColor() {
  if (toggle_btn.checked == true) {
    colored = 1;
  } else {
    colored = 0;
  }
}

etchSketch(defaultSqrSize);