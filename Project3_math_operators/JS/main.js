// Main function that performs and displays multiple math operations
function showMath() {
  // Basic numbers to work with
  var a = 20;
  var b = 6;
  var c = 10;

  // Perform  arithmetic operations
  var addition = a + b;
  var subtraction = a - b;
  var multiplication = a * b;
  var division = a / b;
  var modulus = a % b; // Remainder of a divided by b
  var negation = -a; // Negate the value of a

  // Math object method examples
  var r1 = Math.random(); // random number between 0 and 1
  var r2 = Math.floor(Math.random() * 11); // random whole number 0-10
  var r3 = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // random whole number 10-10
  var root = Math.sqrt(49); // square root
  var biggest = Math.max(10,25,3); // largest number in the list
  var rounded = Math.round(7.6);

  // Increment and decrement examples
  c++;
  var afterIncrement = c;
  c--;
  var afterDecrement = c;

  // Build output string using +=
  var output = "Addition: " + a + " + " + b + " = " + addition + "<br>";
  output += "Subtraction: " + a + " - " + b + " = " + subtraction + "<br>";
  output += "Multiplication: " + a + " * " + b + " = " + multiplication + "<br>";
  output += "Division: " + a + " / " + b + " = " + division + "<br>";
  output += "Negated value: " + negation + "<br>";
  output += "Modulus: " + a + " % " + b + " = " + modulus + "<br>";
  output += "After increment: " + afterIncrement + "<br>";
  output += "After decrement: " + afterDecrement + "<br>";
  output += "Random: " + r1 + "<br>";
  output += "Random (0-10): " + r2 + "<br>";
  output += "Random (10-20): " + r3 + "<br>";
  output += "Root: " + root + "<br>";
  output += "Biggest: " + biggest + "<br>";
  output += "Rounded: " + rounded;

  // Display the final output in the DOM
  document.getElementById("math").innerHTML = output;
}
