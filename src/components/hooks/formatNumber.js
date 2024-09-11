function formatNumber(number) {
  Number(number);
  if (typeof number === 'number' && !isNaN(number)) {
    if (Number.isInteger(number)) {
      return number.toFixed(2);
    } else {
      return number.toFixed(2);
    }
  } else {
    return 'Invalid number';
  }
}
export default formatNumber;
