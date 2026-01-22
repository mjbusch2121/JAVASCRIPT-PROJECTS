// Uses the concat() method to join multiple strings
function combineStrings() {

    // Create two or more strings
    var part1 = "Fresh ";
    var part2 = "produce ";
    var part3 = "is the best!";

    // Use concat() to combine them
    var fullSentence = part1.concat(part2, part3);

    //Display the result in the <p> element
    document.getElementById("Concat_Result").innerHTML = fullSentence;
}

// Uses the slice() method to display part of a string
function runSlice() {

    // Full string to slice from
    var sentence = "Fresh produce is always a good choice.";

    // Slice out a section of the string (characters 0–12)
    var slicedPart = sentence.slice(0, 13);

    // Display the sliced section in the <p> element
    document.getElementById("Slice_Result").innerHTML = slicedPart;
}

// Converts a string to uppercase using the toUpperCase() method
function runUpperCase() {

    // Original string
    var sentence = "Fresh produce is amazing.";

    // Convert to uppercase
    var upperVersion = sentence.toUpperCase();

    // Display the result
    document.getElementById("Upper_Result").innerHTML = upperVersion;
}

// Uses the search() method to find a word inside a string
function runSearch() {

    // String to search inside
    var sentence = "Fresh produce is always a good choice.";

    // Search for the word "produce"
    var position = sentence.search("produce");

    // Display the result
    document.getElementById("Search_Result").innerHTML =
        "The word 'produce' starts at index: " + position;
}

// Uses the toString() method to convert a number into a string
function runToString() {

    // A number value
    var numberValue = 42;

    // Convert the number to a string
    var stringValue = numberValue.toString();

    // Display the result in the <p> element
    document.getElementById("ToString_Result").innerHTML = 
        "The number as a string is: " + stringValue;
}

//Uses toFixed() method to format a number to fixed decimals
function runToFixed() {

    // A number with several decimal places
    var numberValue = 7.45678;

    // Format the number to 2 decimal places
    var fixedValue = numberValue.toFixed(2);

    // Display the result
    document.getElementById("ToFixed_Result").innerHTML =
        "Formatted number: " + fixedValue;
}