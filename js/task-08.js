const formRef = document.querySelector('.login-form')
const inputRef = document.querySelectorAll('input')

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const eventEl = event.currentTarget.elements;
       if (eventEl.email.value === ""|| eventEl.password.value === "") {
      return  alert('Поле не може бути порожнім.');
};

    formData.forEach((value, names) => {
        console.log(names);
        console.log(value);
    });

  formRef.reset()
    
};