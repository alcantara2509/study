const square = document.querySelector('.square');
let vel = 50;
let ml = 0;
let mt = 0;
let oi = document.querySelector('.oi');

square.style.backgroundColor = 'green'

addEventListener('keydown', (e) => {
  if (square.style.backgroundColor === 'green') {
    square.style.backgroundColor = 'black'
  } else {
    square.style.backgroundColor = 'green'
  }
  if (e.keyCode == '39') {
    moveRight();
  }
  if (e.keyCode == '40') {
    moveDown();
  }
  if (e.keyCode == '37') {
    moveLeft();
  }
  if (e.keyCode == '38') {
    moveUp();
  }

})

function moveRight() {
  ml += vel;
  square.style.marginLeft = ml + 'px';
}

function moveDown() {
  mt += vel;
  square.style.marginTop = mt + 'px';
}

function moveLeft() {
  ml -= vel;
  square.style.marginLeft = ml + 'px';
}

function moveUp() {
  mt -= vel;
  square.style.marginTop = mt + 'px';
}