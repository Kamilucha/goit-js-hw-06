
const inputEl = document.querySelector('#validation-input');
const atrEl = inputEl.getAttribute('data-length')


inputEl.addEventListener('blur', () => {
    if (inputEl.value.length !== Number(atrEl)) {
       inputEl.classList.add('invalid')
    } else{
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');

   }
  
})