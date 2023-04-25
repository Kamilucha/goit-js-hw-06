function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonEL = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEL.addEventListener('click', () => {
  const bodyEl = document.querySelector('body');
  const currentColor = getRandomHexColor()
  bodyEl.style.backgroundColor = currentColor;

 spanEl.textContent = currentColor
});