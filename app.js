var letras, categorias;

// Variables botones
const categoriasBtn = document.querySelector('.categorias-btn');
const letrasBtn = document.querySelector('.letras-btn');
const categoriasDOM = document.querySelector('.categorias-lista');
const letrasDOM = document.querySelector('.letras-resultados');
const newGame = document.querySelector('.new-game');
const spinner = document.querySelector('.progress');

init();
// event listener para categorias
categoriasBtn.addEventListener('click', (e) => {
  categoriasBtn.disabled = true;
  getCategorias();
});

letrasBtn.addEventListener('click', (e) => {
  getLetras();
});
newGame.addEventListener('click', (e) => {
  init();
});

function getLetras() {
  letrasDOM.innerHTML = '';
  spinner.style.display = 'block';
  setTimeout(() => {
    const index = Math.floor(Math.random() * letras.length);
    if (letras[index]) {
      console.log(letras[index]);
      spinner.style.display = 'none';
      const letrasDom = letras.splice(index, 1);
      letrasDOM.innerHTML = letrasDom;
    } else {
      letrasDOM.innerHTML = 'Juego terminado';
      console.log('game over');
      letrasBtn.style.display = 'none';
    }
  }, 1500);
}

function getCategorias() {
  newGame.style.display = 'block';
  function randomCategorias(items) {
    return Math.floor(Math.random() * items.length);
  }
  for (var i = 0; i < 6; i++) {
    var categoriasRandom = categorias.splice(randomCategorias(categorias), 1);
    categoriasDOM.innerHTML += `<li>${categoriasRandom}</li>`;
  }
}

function init() {
  newGame.style.display = 'none';
  spinner.style.display = 'none';
  letrasBtn.style.display = 'inline';
  newGame.style.display = 'none';
  categoriasDOM.innerHTML = '';
  letrasDOM.innerHTML = '';
  categoriasBtn.disabled = false;
  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'Z',
  ];
  categorias = [
    'Famosos',
    'Personal de salud',
    'Marcas ingeribles',
    'Comida',
    'Autopartes',
    'Anatomia',
    'Enfermedades',
    'Capitales',
    'Herramientas',
    'Electrodmésticos',
    'Inglés',
    'Películas y series',
    'Deportes',
    'Colores',
    'Profesiones/Ocupaciones',
    'Jugadores de Futbol',
    'Bandas Musicales/Solistas',
    'Material de construcción',
  ];
}
