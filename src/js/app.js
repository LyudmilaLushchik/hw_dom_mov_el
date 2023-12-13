// Получаем элементы игрового поля и персонажа
const gameBoard = document.querySelector(".game-board");
const character = document.getElementById("character");

// Генерируем случайную позицию для персонажа
const randomPosition = () => {
  const cells = gameBoard.querySelectorAll(".cell");
  const randomCell = cells[Math.floor(Math.random() * cells.length)];
  return randomCell;
};

// Устанавливаем начальную позицию персонажа
let currentPosition = randomPosition();
currentPosition.appendChild(character);

// Функция перемещения персонажа
const moveCharacter = () => {
  // Получаем все ячейки игрового поля
  const cells = gameBoard.querySelectorAll(".cell");
  // Выбираем случайную ячейку, которая не является текущей позицией персонажа
  let newPosition;
  do {
    newPosition = cells[Math.floor(Math.random() * cells.length)];
  } while (newPosition === currentPosition);
  // Перемещаем персонажа в новую позицию
  newPosition.appendChild(character);
  currentPosition = newPosition;
};

// Запускаем функцию перемещения персонажа каждые 2 секунды
setInterval(moveCharacter, 2000);
