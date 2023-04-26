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
      const form = {}
      form.email = eventEl.email.value;
      form.password = eventEl.password.value;
      console.log(form)
    });

  formRef.reset()
    
};