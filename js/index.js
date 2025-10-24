let cardMaxValue = 11
let cardMinValue = 2

let currentCardValue = 0

function generateRandomCardNumber(minValue, maxValue) {
  min = Math.ceil(minValue);
  max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min)) + min;
}
