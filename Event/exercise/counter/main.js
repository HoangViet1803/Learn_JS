const buttonMinus = document.querySelector('.counter-descrease');
const buttonPlus = document.querySelector('.counter-increase');
const counterNumber = document.querySelector('.counter-number');
let counterValue = parseInt(counterNumber.textContent);
buttonPlus.addEventListener('click', function() {
    if (counterValue >= 10) return 10
    counterValue += 1;
    counterNumber.textContent = counterValue
});
buttonMinus.addEventListener('click', function() {
    if (counterValue <= 0) return 0
    counterValue -= 1;
    counterNumber.textContent = counterValue;
})