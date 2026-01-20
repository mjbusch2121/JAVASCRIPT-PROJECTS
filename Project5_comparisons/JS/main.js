// Diplay the type of a number
function showNumber() {
    var value = 42;
    document.getElementById("Output").innerHTML = 
        "Value: " + value + "<br>Type: " + typeof value;
}

// Display the type of a string
function showString() {
    var value = "Blueberry";
    document.getElementById("Output").innerHTML = 
        "Value: " + value + "<br>Type: " + typeof value;
}

// Display the type of a boolean
function showBoolean() {
    var value = true;
    document.getElementById("Output").innerHTML = 
        "Value: " + value + "<br>Type: " + typeof value;
}

// Display the type of an object
function showObject() {
    var value = { name: "Apple", color: "Red" };
    document.getElementById("Output").innerHTML =
    "Value: { name: 'Apple', color: 'Red' }<br>Type: " + typeof value;
}

// Display positive Infinity
function showInfinity() {
    var bigNumber = 1e309; // larger than JavaScript's max number
    document.getElementById("Output").innerHTML =
        "Result: " + bigNumber;
}

// Display negative Infinity
function showNegativeInfinity() {
    var smallNumber = -1e309; // smaller than JavaScript's min number
    document.getElementById("Output").innerHTML =
        "Result: " + smallNumber;
}

// Display true using a comparison operator
function compareTrue() {
    var apples = 10;
    var oranges = 5;

    var result = apples > oranges;

    document.getElementById("Output").innerHTML =
        "Is 10 greater than 5? " + result;
}
// Display false using a comparison operator
function compareFalse() {
    var blueberries = 3;
    var strawberries = 12;

    var result = blueberries > strawberries;

    document.getElementById("Output").innerHTML = 
        "Is 3 greater than 10?" + result;
}
// Performs a math operation and logs the result to the console
function logMathOperation() {
    var apples = 12;
    var oranges = 8;

    // Perform a math operation
    var totalFruit = apples + oranges;
    // Log the result to the console
    console.log("Total fruit:", totalFruit);
}
// Demonstrates Boolean logic by logging a false comparison to the console
function logFalse() {
    var apples = 5;
    var oranges = 10;

    // This comparison is false
    var result = apples > oranges;

    console.log("Boolean result:", result);
}
// Demonstrates strict equality returning true (same type + same value)
function strictTrue() {
    var result = 5 === 5;
    document.getElementById("Output").innerHTML =
        "5 === 5 returns: " + result;
}
// Demonstrates strict equality returning false (different type + different value)
function strictFalse_TypeAndValue() {
    var result = 10 === "3";
    document.getElementById("Output").innerHTML = 
        "10 === '3' returns: " + result;
}
// Demonstrates strict equality returning false (different type, same value)
function strictFalse_DifferentTypeSameValue() {
    var result = 7 === "7";
    document.getElementById("Output").innerHTML = 
        "7 === '7' returns: " + result;
}
// Demonstrates strict equality returning false (same type, different value)
function strictFalse_SameTypeDifferentValue() {
    var result = 9 === 4; // both numbers, different values
    document.getElementById("Output").innerHTML =
        "9 === 4 returns: " + result;
}
// Demonstrates the AND operator returning true
function andTrue() {
    var apples = 10;
    var oranges = 5;

    var result = (apples > 5) && (oranges < 10);
    document.getElementById("Output").innerHTML = 
        "AND true example: " + result;
}
// Demonstrates the AND operator returning false
function andFalse() {
    var apples = 2;
    var oranges = 20;

    var result = (apples > 5) && (oranges < 10);
    document.getElementById("Output").innerHTML = 
        "AND false example: " + result;
}
// Demonstrates the OR operator returning true
function orTrue() {
    var bananas = 12;
    var pears = 3;

    var result = (bananas > 10) || (pears > 10); // true || false → true

    document.getElementById("Output").innerHTML =
        "OR true example: " + result;
}
// Demonstrates the OR operator returning false
function orFalse() {
    var bananas = 2;
    var pears = 3;

    var result = (bananas > 10) || (pears > 10); // false || false → false

    document.getElementById("Output").innerHTML =
        "OR false example: " + result;
}

// Demonstrates document.write() and typeof
function showWriteType() {
    var fruit = "Peach";
    document.write("Value: " + fruit + "<br>Type " + typeof fruit);
}

// Combine a string and a number
function combineStringNumber() {
    var result = "I have " + 7 + " apples.";
    document.getElementById("Output").innerHTML = result;
}

// Demonstrate the NOT operator
function notExample() {
    var isRipe = false;
    var result = !isRipe; // true
    document.getElementById("Output").innerHTML =
        "NOT operator example (!false): " + result;
}

function lessThanExample() {
    var result = 3 < 10; // true
    document.getElementById("Output").innerHTML =
        "3 < 10 returns: " + result;
}

function equalLoose() {
    var result = 5 == "5"; // true
    document.getElementById("Output").innerHTML =
        "5 == '5' returns: " + result;
}