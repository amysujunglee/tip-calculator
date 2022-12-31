const sum = document.querySelector('#sum');
const tipPercentage = document.querySelector('#tip-percentage');
const showResult = document.querySelector('#show-result');
const calculateBtn = document.querySelector('#calculate-btn');

calculateBtn.addEventListener('click', () => {
    let sumValue = Number(sum.value);
    let tipPercentageValue = Number(tipPercentage.value);

    console.log(sumValue, tipPercentageValue);

    calculateResult(sumValue, tipPercentageValue);
});

const calculateResult = (sum, tipPercentage) => {
    let tip = sum * (tipPercentage / 100);
    let total = sum + tip;

    console.log(typeof (tip));

    const newList = document.createElement('ul');
    newList.innerHTML = `
        <li>Sum before tip: $${sum}</li>
        <li>Tip percentage: ${tipPercentage}%</li>
        <li>Tip: $${tip.toFixed(2)}</li>
        <li>Total: $${total.toFixed(2)}</li>
    `
    showResult.append(newList);
}