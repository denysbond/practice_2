// Напишите функцию с переменным числом аргументов, которая возвращает строку с многочленом, в качестве коэффициентов
// которого выступают аргументы функции. Нулевых слагаемых не должно быть в полиноме. Если коэффициент равен 1 или -1,
// то слагаемое должно иметь вид "+x^n" или "-x^n".

// Например: getPolynomial(-2, 3) должен вернуть многочлен первой степени "-2*x+3". А getPolynomial(1, 0, 0)
// должен сформировать многочлен с единственным слагаемым "x^2";

// getPolynomial() === "0";
// getPolynomial(-2, 3) === "-2*x+3";
// getPolynomial(1, 0, 0) === "x^2";
// getPolynomial(8, 3.5, -1, 0, 12) === "8*x^4+3.5*x^3-x^2+12";

export default function getPolynomial(...coefficients) {
  const sortCoef = coefficients.filter((value) => value !== 0);

  if (sortCoef.length === 0) {
    return "0";
  }

  let n = coefficients.length - 1;

  function setPolinomalArray(value) {
    if (value === 0) {
      value = "";
    } else if (n === 0) {
      value = `${value}`;
    } else if (n === 1 && (value === 1 || value === -1)) {
      value = value === 1 ? "x" : "-x";
    } else if (value === 1 || value === -1) {
      value = value === 1 ? `x^${n}` : `-x^${n}`;
    } else if (n === 1) {
      value = `${value}*x`;
    } else {
      value = `${value}*x^${n}`;
    }

    n--;
    return value;
  }

  return coefficients.map(setPolinomalArray).reduce((sum, value) => {
    if (value[0] === "-") {
      sum += value;
    } else if (value !== "" && sum !== "") {
      sum += `+${value}`;
    } else {
      sum += value;
    }

    return sum;
  });
}
