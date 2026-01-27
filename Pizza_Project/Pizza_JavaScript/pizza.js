function getReceipt() {
  // This initializes our string so it can get passed from function to function, growing line by line into a full receipt
  var text1 = '<h3>You Ordered:</h3>';
  // Initialize runningTotal to keep track of the accumulating price
  var runningTotal = 0;
  // Initialize sizeTotal to store the cost of the selected pizza size
  var sizeTotal = 0;
  // Get all HTML elements with the class name 'size' (radio buttons for pizza sizes)
  var sizeArray = document.getElementsByClassName('size');
  // Loop through all size options to find which one is selected
  for (var i = 0; i < sizeArray.length; i++) {
    // Check if the current size radio button is checked/selected
    if (sizeArray[i].checked) {
      // Store the value of the selected size (e.g., "Large Pizza")
      var selectedSize = sizeArray[i].value;
      // Add the selected size to the receipt text with a line break
      text1 = text1 + selectedSize + '<br>';
    }
  }
  // Determine the price based on which size was selected using if-else if statements
  if (selectedSize === 'Personal Pizza') {
    sizeTotal = 6;
  } else if (selectedSize === 'Medium Pizza') {
    sizeTotal = 8;
  } else if (selectedSize === 'Large Pizza') {
    sizeTotal = 10;
  } else if (selectedSize === 'Extra Large Pizza') {
    sizeTotal = 14;
  } else if (selectedSize === 'XXL Pizza') {
    sizeTotal = 16;
  }
  // Add the size cost to the running total (starting the order total)
  runningTotal = sizeTotal;
  // Console logging for debugging: show selected size and its price
  console.log(selectedSize + ' = $' + sizeTotal + '.00');
  // Console logging: show current receipt text content
  console.log('size text1: ' + text1);
  // Console logging: show current subtotal after size selection
  console.log('subtotal: $' + runningTotal + ' .00');
  // These variables will get passed on to each function
  // Call getTopping() to process toppings, passing the current total and receipt text
  getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
  // Initialize toppingTotal to store the cost of additional toppings
  var toppingTotal = 0;
  // Create an empty array to store the names of selected toppings
  var selectedTopping = [];
  // Get all HTML elements with the class name 'toppings' (checkboxes for toppings)
  var toppingArray = document.getElementsByClassName('toppings');
  // Loop through all topping checkboxes to find which ones are selected
  for (var j = 0; j < toppingArray.length; j++) {
    // Check if the current topping checkbox is checked
    if (toppingArray[j].checked) {
      // Add the topping value to the selectedTopping array
      selectedTopping.push(toppingArray[j].value);
      // Log the selected topping to console for debugging
      console.log('selected topping item: (' + toppingArray[j].value + ')');
      // Add the topping name to the receipt text with a line break
      text1 = text1 + toppingArray[j].value + '<br>';
    }
  }
  // Count how many toppings the user selected (assuming selectedTopping is an array)
  var toppingCount = selectedTopping.length;
  // Check if they selected more than 1 topping
  if (toppingCount > 1) {
    // Calculate cost: first topping is free, charge for additional ones
    // Example: 3 toppings selected = pay for 2
    toppingTotal = toppingCount - 1;
  } else {
    // 0 or 1 toppings = no extra charge
    toppingTotal = 0;
  }
  // Add the topping cost to the overall order total
  runningTotal = runningTotal + toppingTotal;
  // DEBUGGING OUTPUT to browser console:
  // Shows raw count of toppings selected
  console.log('total selected topping items: ' + toppingCount);
  // Shows the math: "3 topping - 1 free topping = $2.00"
  console.log(
    toppingCount + ' topping - 1 free topping = ' + '$' + toppingTotal + '.00'
  );
  // Shows the text description of selected toppings (from earlier in the code)
  console.log('topping text1: ' + text1);
  // Shows final calculated price
  console.log('Purchase Total: ' + '$' + runningTotal + '.00');
  // DISPLAY OUTPUT to the webpage:
  // Insert the list of selected toppings into the HTML element with id="showText"
  document.getElementById('showText').innerHTML = text1;
  // Insert the final price into the element with id="totalPrice", wrapped in HTML tags
  document.getElementById('totalPrice').innerHTML =
    '<h3>Total: <strong>$' + runningTotal + '.00' + '</strong></h3>';
}
