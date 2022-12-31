const sum = document.querySelector('#sum');
const tipPercentage = document.querySelector('#tip-percentage');
const people = document.querySelector('#people');
const showResult = document.querySelector('#show-result');
const calculateBtn = document.querySelector('#calculate-btn');

sum.focus();

calculateBtn.addEventListener('click', () => {
    let sumValue = Number(sum.value);
    let tipPercentageValue = Number(tipPercentage.value);
    let peopleValue = Number(people.value);

    calculateResult(sumValue, tipPercentageValue, peopleValue);
    sum.value = '';
    tipPercentage.value = '';
    people.value = '';
    sum.focus();
});

const calculateResult = (sum, tipPercentage, people) => {
    let tip = sum * (tipPercentage / 100);
    let total = sum + tip;
    let divide = total / people;

    const newList = document.createElement('ul');
    newList.innerHTML = `
        <li>Sum before tip: $${sum}</li>
        <li>Tip percentage: ${tipPercentage}%</li>
        <li>Tip: $${tip.toFixed(2)}</li>
        <li>Total: $${total.toFixed(2)}</li>
        <li>Each person: $${divide}</li>
    `
    showResult.append(newList);
}