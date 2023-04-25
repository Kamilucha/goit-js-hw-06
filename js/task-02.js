const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const parrentEl = document.querySelector('ul');

  ingredients.forEach(item => {
    const newElem = document.createElement('li')
    newElem.classList.add('item')
    console.log(item)
    newElem.textContent = item
    parrentEl.append(newElem)
  })