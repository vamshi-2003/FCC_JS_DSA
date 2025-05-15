// Get the input, button, and output elements
const iNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDisplay = document.getElementById('output');

// Function to clean up the input and check if it's a palindrome
function res(num) {
  if(!num){
    return 'Please enter a valid number';
  }
  if (num > 3999) {
    return 'Please enter a number less than or equal to 3999';
  }
  if(num < 1) {
    return 'Please enter a number greater than or equal to 1';
  }
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900,  numeral: "CM" },
    { value: 500,  numeral: "D" },
    { value: 400,  numeral: "CD" },
    { value: 100,  numeral: "C" },
    { value: 90,   numeral: "XC" },
    { value: 50,   numeral: "L" },
    { value: 40,   numeral: "XL" },
    { value: 10,   numeral: "X" },
    { value: 9,    numeral: "IX" },
    { value: 5,    numeral: "V" },
    { value: 4,    numeral: "IV" },
    { value: 1,    numeral: "I" }
  ];

  let result = "";

  for (const { value, numeral } of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}
function convert_roman() {
  const inputNumber = iNumber.value;
      outputDisplay.textContent = res(inputNumber);
    }
// Add event listener to the button
convertBtn.addEventListener('click', convert_roman);