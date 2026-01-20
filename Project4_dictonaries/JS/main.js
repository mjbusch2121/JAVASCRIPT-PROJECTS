// Function that displays a value from a dictionary (JavaScript object)
function showProduceInfo() {
    // Create a dictionary (object) with key-value pairs
    var produce = {
        name: "Blueberry",
        color: "deep blue",
        category: "Berry",
        pricePerPound: "$3.99",
        nutrition: "High in antioxidants"
    };

    // Output one of the values to HTML element
    document.getElementById("Dictionary").innerHTML = 
    "Produce: " + produce.name + "<br>" + 
    "Color: " + produce.color + "<br>" +
    "Category: " + produce.category + "<br>" + 
    "Price: " + produce.pricePerPound + "<br>" +
    "Nutrition: " + produce.nutrition;
}

// Function that demonstrates deleting a key from a dictionary
function deleteKeyExample() {
    // Create a dictionary (object)
    var testObject = {
        name: "Blueberry",
        color: "deep blue",
        category: "Berry",
        pricePerPound: "$3.99"
    };

    // Delete one of the key-value pairs (color)
    delete testObject.color;

    // Display the deleted value (will show "undefined")
    document.getElementById("Dictionary").innerHTML =
    "Color after deletion: " + testObject.color;
}