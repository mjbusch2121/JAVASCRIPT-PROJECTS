// showProduceUpdate()
// Builds a list of produce market trends and displays them on the page
function showProduceUpdate() {
  // Array holding each produce trend as a separate string
  var updates = [
    "Honeycrisp apples are trending up 8%.",
    "Organic blueberries are up 5%.",
    "Kale prices dropped 3%.",
  ];
  // Start building the HTML output as an unordered list
  var output = "<ul>";
  output += "<!--Produce Trend Updates-->"; // simple use of +=
  // Loop through the array and add it as a list item
  for (var i = 0; i < updates.length; i++) {
    output += "<li>" + updates[i] + "</li>";
  }
  // Close the unordered list tag
  output += "</ul>";
  // Simple second function with a different ID
  function showNutrition() {
    document.getElementById("nutritionInfo").innerHTML =
      "Blueberries contain high levels of antioxidants.";
  }
  // Insert the final HTML string into the element with id="produceUpdate"
  document.getElementById("produceUpdate").innerHTML = output;
}

// showNutrition()
// Displays a simple nutrition highlight
function showNutrition() {
  var nutrition = "Blueberries are rich in antioxidants and vitamin C.";

  document.getElementById("nutritionInfo").innerHTML = nutrition;
}
