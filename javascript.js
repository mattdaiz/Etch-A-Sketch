function createSquares(squares) {
  let container = document.getElementById("game");
  container.innerHTML = "";
  container.classList.add("grid-container");

  let squareSize = 700 / squares;

  container.style.setProperty('grid-template-columns', 'repeat(' + squares + ', ' + squareSize + 'px)');
  container.style.setProperty('grid-template-rows', 'repeat(' + squares + ', ' + squareSize + 'px)');

  let i = 0;
  while (i != squares * squares) {
    i++;
    let square = document.createElement("div");
    square.classList.add("square");
    // square.addEventListener("mouseover", () => {
    //   square.style.backgroundColor = "black";
    // });
    container.appendChild(square);
  }
  optionDropdown();
}

function reset() {
  let container = document.getElementById("game");
  // Get all divs from container Nodelist and remove class marker
  container.querySelectorAll("div").forEach(div => div.classList.remove("marker"));
  container.querySelectorAll("div").forEach(div => div.style.backgroundColor = "");
}

function size() {
  let number = "";
  while (number < 1 || number > 100 || isNaN(number)) {
    if (number == null){
      return;
    }
    number = window.prompt("Enter a number between 1 and 100");
  }
  createSquares(number);
}

function setColorBlack() {
  let container = document.getElementById("game");
  container.querySelectorAll("div").forEach(div => div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  }));
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColorRandom() {
  let container = document.getElementById("game");
  // Get all divs from container Nodelist and addeventlistener
  container.querySelectorAll("div").forEach(div => div.addEventListener("mouseover", () => {
    // div.classList.add("markerRainbow");
    div.style.backgroundColor = (getRandomColor());
  }));
}

function optionDropdown() {
  let index = document.getElementById('options').selectedIndex;
  let option = document.getElementById('options').options;
  if (option[index].text == "Black") {
    setColorBlack();
  } else if (option[index].text == "Random") {
    setColorRandom();
  }
}

// Default Size 
createSquares(16);
let dropdown = document.getElementById('options');
dropdown.addEventListener("click", optionDropdown);

let sizeBtn = document.getElementById('size');
sizeBtn.addEventListener("click", size);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);