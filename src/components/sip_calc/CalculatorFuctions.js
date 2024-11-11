export function CalculateTotalReturn(
  sipAmount,
  investmentPeriod,
  rateOfReturn
) {
  const perYrAmount = [];
  var totalAmount = 0;
  for (let i = 1; i <= investmentPeriod; i++) {
    totalAmount = Math.round(
      (totalAmount + sipAmount * 12) * (1 + rateOfReturn / 100)
    );
      perYrAmount.push(totalAmount);
  }
    console.log(perYrAmount);
    return perYrAmount;
  
}

export function CalculateTotalInvestment(sipAmount, investmentPeriod) {
  const totalInvestment = [];
  let sum = 0;
  for (let i = 1; i <= investmentPeriod; i++) {
    sum += sipAmount * 12;
    totalInvestment.push(sum);
  }
    // console.log('inside func' + totalInvestment);
  return totalInvestment;
}
