// Creates a Fruit object with name and color properties
function Fruit(name, color) {
  this.name = name;
  this.color = color;
  // Returns a sentence describing the fruit
  this.describe = function () {
    return "This " + this.name + " is " + this.color + ".";
  };
}

// Create a new Fruit object using 'new'
function showFruit() {
  var myFruit = new Fruit("Apple", "Red");
  document.getElementById("New_and_This").innerHTML = myFruit.describe();
}

// Demonstrates assigning a reserved word as a string value
function reservedWordExample() {
  var myWord = "return"; // 'return' is a reserved word, but allowed as a string
  document.getElementById("New_and_This").innerHTML =
    "Reserved word as a value: " + myWord;
}

// Constructor function using 'this' to define properties
function Vegetable(name, color) {
  this.name = name;
  this.color = color;

  // Method that describes the vegetable
  this.describe = function () {
    return "This " + this.name + " is " + this.color + ".";
  };
}

// Creates a new Vegetable object and displays its description
function showVegetable() {
  var myVeg = new Vegetable("Carrot", "Orange");
  document.getElementById("New_and_This").innerHTML = myVeg.describe();
}

// Demonstrates a nested function that performs a calculation
function outerFunction() {
  // Inner function (nested function)
  function innerFunction() {
    return "Nested functions are working!";
  }
  // Displays the result of the nested function
  document.getElementById("Nested_Function").innerHTML = innerFunction();
}

// Checks if the user is old enough to vote using a ternary operator
function checkVotingAge() {
  // Get the user's age from the input field and convert it to a number
  var age = Number(document.getElementById("ageInput").value);
  // Ternary operator: returns one of two messages based on the condition
  var message = age >= 18 ? "You can vote!" : "You are not old enough to vote.";
  // Display the result in the browser
  document.getElementById("Ternary_Output").innerHTML = message;
}
