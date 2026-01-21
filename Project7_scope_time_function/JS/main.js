// Global variable (accessible anywhere in this file)
var globalMessage = "This is a global variable.";

// Demonstrates a local variable inside a function
function showLocalVariable() {
  var localMessage = "This is a local variable.";
  console.log(localMessage);
}

// Function intentionally written with an error for debugging practice
function brokenFunction() {
  // Log to console to help debug
  console.log("brokenFunction() has started running.");

  var fruit = "Apple";

  // Intentional error: misspelled variable name ("frut")
  console.log(frut);

  console.log("This line will not run because of the error above.");
}

// Displays a message based on the current hour of the day
function displayTimeMessage() {
  // Get the current hour (0-23)
  var currentHour = new Date().getHours();

  var message;

  // If statement that checks the time of the day
  if (currentHour < 12) {
    message = "Good Morning!";
  } else if (currentHour < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  // Display the message inside the <p> element
  document.getElementById("Time_Message").innerHTML = message;
}

// Runs a custom time check using an if statment
function myTimeFunction() {
  // Get the current hour (0-23)
  var hour = new Date().getHours();

  var message;

  // My own if statement: checks if it's before or after 6 PM
  if (hour < 18) {
    message = "It's earlier than 6 PM.";
  } else {
    message = "it's 6 PM or later.";
  }

  // Display the result inside the <p> element
  document.getElementById("My_Time_Check").innerHTML = message;
}

// Shows a produce-themed message based on the current time of day
function produceTimeFunction() {
  // Get the current hour (0–23)
  var hour = new Date().getHours();

  var message;

  // Produce-themed time check
  if (hour < 12) {
    message = "Morning pick: Fresh berries are perfect right now.";
  } else if (hour < 18) {
    message = "Afternoon pick: Crisp apples make a great snack.";
  } else {
    message = "Evening pick: Try some sweet, ripe grapes to wind down.";
  }

  // Display the message inside the <p> element
  document.getElementById("Produce_Time").innerHTML = message;
}

// Checks if the user's produce item is in season using if/else statement
function checkProduceSeason() {
  // Get the user's input from the text box
  var produce = document.getElementById("Produce_Input").value.toLowerCase();

  // Seasonal Produce List (expand anytime)
  var seasonalItems = {
    strawberries: "Strawberries are in season during spring and early summer.",
    berries: "Mixed berries peak in late spring through summer.",
    apples: "Apples are in season during fall.",
    peaches: "Peaches are best in mid to late summer.",
    spinach: "Spinach is in season in spring and fall.",
    kale: "Kale thrives in fall and winter.",
    tomatoes: "Tomatoes peak in mid to late summer.",
  };

  var message;

  // If the produce exists in seasonal list, show its message
  if (seasonalItems[produce]) {
    message = seasonalItems[produce];
  } else {
    // Default message for items not in the list
    message = "That produce item is not in my seasonal list yet.";
  }

  // Display the result in the <p> element
  document.getElementById("Produce_Result").innerHTML = message;
}
