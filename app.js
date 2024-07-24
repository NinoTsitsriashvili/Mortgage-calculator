function repaymentCalculator(amount, term, rate) {
  let result = amount + amount * (rate / 100) * term;
  console.log("Repayment Calculator Result:", result);
  return result;
}

function interestOnly(amount, term, rate) {
  let result = amount * (rate / 100) * term;
  console.log("Interest Only Result:", result);
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  const inputFieldForAmount =
    document.getElementsByClassName("amount_field")[0];
  const inputFieldForTerm = document.getElementsByClassName("term_input")[0];
  const inputFieldForRate = document.getElementsByClassName("rate_input")[0];
  const saveButton = document.getElementsByClassName("calculate_button")[0];
  const divRight = document.getElementsByClassName("rightContainer")[0];
  const submitButton = document.getElementsByClassName("submit_button")[0];
  const divRightSecond = document.getElementsByClassName("rightSecond")[0];

  saveButton.addEventListener("click", function () {
    let amountValue = parseFloat(inputFieldForAmount.value);
    let termValue = parseFloat(inputFieldForTerm.value);
    let rateValue = parseFloat(inputFieldForRate.value);

    if (!isNaN(amountValue) && !isNaN(termValue) && !isNaN(rateValue)) {
      repaymentCalculator(amountValue, termValue, rateValue);
      interestOnly(amountValue, termValue, rateValue);
      divRight.style.display = "none";
      divRightSecond.style.display = "inline-block";
    } else {
      console.error("Invalid input values.");
    }
  });
});
