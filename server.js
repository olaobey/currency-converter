const CC = require("currency-converter-lt");

//US dollar
let fromCurrency = "NGN";
// Nigeria currency
let toCurrency = "USD";

let amountToConvert = 1;

let currencyConverter = new CC({
  from: fromCurrency,
  to: toCurrency,
  amount: amountToConvert,
});

currencyConverter.convert().then((response) => {
  console.log(
    amountToConvert +
      "  " +
      fromCurrency +
      " is equal to " +
      response +
      "  " +
      toCurrency
  );
});
