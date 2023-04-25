function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDeleteEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
}



refs.buttonCreateEl.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = refs.inputEl.value;
  const boxes = [];
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    boxes.push(newDiv);
    size += 10;
   
  }
   refs.divBoxesEl.append(...boxes);
  return refs.divBoxesEl.boxes;
};

refs.buttonDeleteEl.addEventListener('click', deleteBoxes);

function deleteBoxes() {
  refs.divBoxesEl.innerHTML = '';
};

refs.inputEl.addEventListener('change', deleteBoxes)