// Get the display element
const display = document.getElementById("display");

// Function to append a symbol to the display
// Function to handle input
function appendSymbol(value) {
    // Get the input element
    let inputElement = document.getElementById("display");
    
    // Get the current value of the input
    let currentValue = inputElement.value;
    
    // Check if the last character is an arithmetic symbol
    let lastChar = currentValue.slice(-1);
    
    // Define the arithmetic symbols
    let operators = ['+', '-', '*', '/', '%'];
    
    // Prevent consecutive arithmetic symbols
    if (operators.includes(lastChar) && operators.includes(value)) {
        inputElement.value = currentValue.slice(0, -1) + value;
    } else {
        // Otherwise, append the new value
        inputElement.value += value;
    }
    
}


// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch {
        display.value = " "; // If an error occurs, show "Error"
    }
}

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');

    if (event.key === 'Enter') {
      
      calculate();
      
    } else if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
      
      display.value += event.key;
    } else if (event.key === 'Backspace') {
      
      display.value = display.value.slice(0, -1);
    }else if (event.key ==='Delete'){
        clearDisplay();
    }

  });
