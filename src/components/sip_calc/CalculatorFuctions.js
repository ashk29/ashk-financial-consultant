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


export function FormatDigits(number) {
    // Convert the number to a string
    const numStr = number.toString();
    
    // Split into the last three digits and the rest
    const lastThreeDigits = numStr.slice(-3);
    let rest = numStr.slice(0, -3);
  
    // If there are digits in 'rest', format them with a comma every two digits
    if (rest) {
      rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      return rest + ',' + lastThreeDigits;
    }
  
    // If there are no 'rest' digits, just return the last three digits
    return lastThreeDigits;
  }