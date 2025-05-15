// Get the input, button, and result elements
const inputField = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDisplay = document.getElementById('result');

// Function to clean up the input and check if it's a palindrome
function checkPalindrome() {
  const inputText = inputField.value;

    // If input is empty, alert the user
      if (!inputText) {
          alert("Please input a value");
              return;
                }

                  // Clean up the input by removing non-alphanumeric characters and converting to lowercase
                    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

                      // Check if the cleaned text is a palindrome
                        const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

                          // Display the result with the original input in the result element
                            if (isPalindrome) {
                                resultDisplay.textContent = `${inputText} is a palindrome`;
                            } 
                            else {
                                      resultDisplay.textContent = `${inputText} is not a palindrome`;
                            }
    }
// Add event listener to the button
checkBtn.addEventListener('click', checkPalindrome);