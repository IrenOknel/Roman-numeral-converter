document.getElementById("convert-btn").addEventListener("click", function () {
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");
  const num = parseInt(input);

  if (input === "" || isNaN(num)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = convertToRoman(num);
});

function convertToRoman(num) {
  const romanMap = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" },
  ];

  let result = "";

  for (const { val, sym } of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result;
}
