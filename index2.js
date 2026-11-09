const amountInput = document.getElementById('amount');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');

const switchButton = document.getElementById('switchBtn');
const resultParagraph = document.getElementById('result');

function convert() {
  const rawAmount = amountInput.value;

  if (rawAmount === '') {
    resultParagraph.innerHTML = 'Введите количество от 0';
    return;
  }

  const amount = Number(rawAmount);

  if (amount < 0 || isNaN(amount)) {
    resultParagraph.innerHTML = 'Введите количество от 0';
    return;
  }

  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  let fromRate = 0;
  let toRate = 0;

  if (fromUnit === 'MM') {
    fromRate = 0.001;
  } else if (fromUnit === 'CM') {
    fromRate = 0.01;
  } else if (fromUnit === 'DM') {
    fromRate = 0.1;
  } else if (fromUnit === 'M') {
    fromRate = 1;
  } else if (fromUnit === 'KM') {
    fromRate = 1000;
  }

  if (toUnit === 'MM') {
    toRate = 0.001;
  } else if (toUnit === 'CM') {
    toRate = 0.01;
  } else if (toUnit === 'DM') {
    toRate = 0.1;
  } else if (toUnit === 'M') {
    toRate = 1;
  } else if (toUnit === 'KM') {
    toRate = 1000;
  }

  const amountInMeters = amount * fromRate;
  const resultAmount = amountInMeters / toRate;

  resultParagraph.innerHTML = amount + ' ' + fromUnit + ' = ' + resultAmount.toFixed(4) + ' ' + toUnit;
}

document.getElementById('convert').addEventListener('click', convert);

switchButton.addEventListener('click', () => {
  const temp1 = fromUnitSelect.value
  const temp2 = toUnitSelect.value

  fromUnitSelect.value = temp2
  toUnitSelect.value = temp1

  convert();
})