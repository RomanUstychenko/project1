function formatNumber(number) {
    Number(number)
      if (typeof number === 'number' && !isNaN(number)) {
      if (Number.isInteger(number)) {
        return number.toFixed(2); // Додаємо два знаки після коми, якщо число ціле
      } else {
        return number.toFixed(2); // Додаємо один знак після коми, якщо число має десяткову частину
      }
    } else {
      return "Invalid number";
    }
  }
  export default formatNumber;