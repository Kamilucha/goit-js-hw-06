const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', nameLabel)

function nameLabel(event) {
    refs.spanEl.textContent = event.currentTarget.value
}