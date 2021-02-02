let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// função abaixo cria ordem aleatoria de cores do Mini Game.

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

// função abaixo faz com que acenda uma nova cor no mini game.

let lightColor = (element, number) => {
  number = number * 500;

  setTimeout(() => {

    element.classList.add('selected');

  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}


  // função abaixo faz o check , se os botoes clicados são os mesmo
  // da ordem gerada no game.

let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {

      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou Iniciando Próximo nível!`);
    nextLevel();
  }
};

// função para o clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
     checkOrder();
  }, 250);

};

// função abaixo retornara a cor;

let createColorElement = (color) => {
  if(color == 0) {

    return green;

  } else if(color == 1) {

    return red;

  } else if (color == 2) {

    return yellow;

  } else if (color == 3) {

    return blue;
  }
}

// função que vai faze o jogo ir para o proximo nivel.
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// função para o fim do jogo que sera o gameOver;
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em ok para iniciar um novo Jogo`);
  order = [];
  clickedOrder = [];

  playGame();
};

// função de starte game.
let playGame = () => {
  alert('Bem vindo ao Genesis! Iniciando Novo jogo!');
  score = 0;

  nextLevel();
};


// função de captura de click do jogo.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

//
