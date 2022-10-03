export const cleanAllCreditInputs = () => {
  const creditCalculator = document.querySelector('.calculator');

  creditCalculator.querySelectorAll('input').forEach((elem) => {
    elem.value = null;
  });
};

export const getCreditAmount = (downPayment, time, monthlyPayment) => {
  return Math.round(downPayment + time * monthlyPayment);
};

export const getMonthlyPayment = (price, downPayment, rate, time) => {
  return Math.round((price - downPayment) * ((rate * Math.pow((1 + rate), time)) / (Math.pow((1 + rate), time) - 1)));
}

export const getPercent = (downPayment, price) => {
  return Math.round((downPayment / price) * 100);
}

export const resetData = (data, max, min) => {
  if (data > max) {
    return max;
  };
  if (data < min) {
    return min;
  }
}