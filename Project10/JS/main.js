function Call_Loop() {
  let text = "";
  let i = 1;

  // While loop that runs as long as i <= 10
  while (i <= 10) {
    text += i;

    if (i < 10) {
      text += ", ";
    }
    i++;
  }

  // Display the loop output in the <p> element
  document.querySelector("#Loop").innerHTML = text;
}

function showLength() {
  // Get the user's text from the input field
  let userText = document.querySelector("#stringInput").value;

  // Use the length property to count the characters
  let lengthOfText = userText.length;

  // Display the result in the <p> element
  document.querySelector("#Length_Result").innerHTML =
    "Your text contains " + lengthOfText + " characters.";
}

function for_Loop() {
  // Create an array of instruments
  const instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute", "Bass"];

  const content = "List of Instruments:<br>" + instruments.join(", ");

  // Display the result in the <p> element
  document.querySelector("#List_of_Instruments").innerHTML = content;
}

function array_Function() {
  // Define an array of produce items
  const produce = ["Apples", "Carrots", "Spinach", "Tomatoes", "Peppers"];

  // Select a specific item from the array
  const selectedItem = produce[2];

  // Display the result in the <p>
  document.getElementById("Array").innerHTML =
    "Your selected item is: " + selectedItem;
}

function constant_function() {
  // Create an object using const
  const produceItem = {
    name: "Carrot",
    color: "orange",
    type: "root vegetable",
  };

  // Use let to declare a message string
  let message = "Original color: " + produceItem.color + "<br>";

  // Change a property value
  produceItem.color = "purple";

  // Add a new property
  produceItem.origin = "Oregon";

  // Update the message using let
  message += "Updated color: " + produceItem.color + "<br>";
  message += "Origin: " + produceItem.origin;

  // Display the result
  document.getElementById("Constant").innerHTML = message;
}

// A function that uses return to send back a value
function calculateTotal(price, quantity) {
  return price * quantity; // return statement
}

// A function called by the button to display the result
function showReturn() {
  // Call the function and store the returned value
  let total = calculateTotal(3, 5); // 3 dollars × 5 items

  // Display the result in the browser
  document.getElementById("Return_Result").innerHTML =
    "The total cost is: $" + total;
}

function showLetObject() {
  // Create an object using let
  let produceItem = {
    name: "Apple",
    color: "red",
    type: "fruit",

    // Method that returns a description
    describe() {
      return "The " + this.name + " is a " + this.color + " " + this.type + ".";
    },
  };

  // Display the method's returned value in the HTML
  document.getElementById("Let_Object_Result").innerHTML =
    produceItem.describe();
}

function break_Loop() {
  let text = "";

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // Stop the loop when i reaches 5
    }
    text += i + " ";
  }
  document.getElementById("Break_Result").innerHTML =
    "Loop stopped early at 5: " + text;
}

function continue_Loop() {
  let text = "";

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    text += i + " ";
  }

  document.getElementById("Continue_Result").innerHTML =
    "Skipped the number 5: " + text;
}
