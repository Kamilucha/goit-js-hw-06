const counterValue = {
    value: 0,
    
    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    }
}

const btnDecr = document.querySelector('[data-action="decrement"]')
const btnIncr = document.querySelector('[data-action="increment"]')
const curValue = document.querySelector('#value')


btnDecr.addEventListener('click', () => {
   counterValue.decrement()
   curValue.textContent = counterValue.value
})

btnIncr.addEventListener('click', () => {
    counterValue.increment()
    curValue.textContent = counterValue.value
})