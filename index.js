const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');

const switchButton = document.getElementById('switchBtn');
const resultParagraph = document.getElementById('result');

function convert() {
  const rawAmount = amountInput.value;

  if (rawAmount === '') {
    resultParagraph.innerHTML = 'Введите сумму от 0';
    return;
  }

  const amount = Number(rawAmount);

  if (amount < 0 || isNaN(amount)) {
    resultParagraph.innerHTML = 'Введите сумму от 0';
    return;
  }

  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  let fromRate = 0;
  let toRate = 0;

  if (fromCurrency === 'RUB') {
    fromRate = 1;
  } else if (fromCurrency === 'USD') {
    fromRate = 90;
  } else if (fromCurrency === 'EUR') {
    fromRate = 100;
  } else if (fromCurrency === 'KZT') {
    fromRate = 0.2;
  }

  if (toCurrency === 'RUB') {
    toRate = 1;
  } else if (toCurrency === 'USD') {
    toRate = 90;
  } else if (toCurrency === 'EUR') {
    toRate = 100;
  } else if (toCurrency === 'KZT') {
    toRate = 0.2;
  }

  const amountInRub = amount * fromRate;
  const resultAmount = amountInRub / toRate;

  resultParagraph.innerHTML = amount + ' ' + fromCurrency + ' = ' + resultAmount.toFixed(2) + ' ' + toCurrency;
}

document.getElementById('convert').addEventListener('click', convert);

switchButton.addEventListener('click', () => {
  const temp1 = fromCurrencySelect.value
  const temp2 = toCurrencySelect.value

  fromCurrencySelect.value = temp2
  toCurrencySelect.value = temp1

  convert();
})