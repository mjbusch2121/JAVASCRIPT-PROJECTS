function getMsg() {
  // STEP 1: SETUP THE XML HTTP REQUEST OBJECT

  let ajaxRequest = new XMLHttpRequest();

  // STEP 2: GET INPUT VALUE OF NAME TO DISPLAY TO USER AFTER REQUEST HAS BEEN MADE
  let inputVal = document.getElementById("fullName").value;

  // STEP 3: FUNCTION TO DISPLAY USER INPUT VALUE ONCE REQUEST HAS BEEN RECEIVED
  ajaxRequest.onload = function () {
    document.getElementById("tkuMsg").innerHTML =
      "Thank you " + inputVal + " for signing up!";
  };

  // STEP 4: CONFIGURE THE REQUEST
  // Open a connection to the server with three parameters:
  // - "GET": The HTTP method (we're requesting data, not sending it)
  // - "content.html": The file we want to retrieve from the server
  // - true: Make this an asynchronous request (don't freeze the browser while waiting)
  ajaxRequest.open("GET", "content.html", true);

  // STEP 5: SET UP THE STATE CHANGE LISTENER
  // This monitors the request's progress through different states
  ajaxRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Replace the entire content div with the HTML from response.html
      // responseText contains the entire content of the response.html file
      document.getElementById("content").innerHTML = ajaxRequest.responseText;
    }
  };

  // STEP 6: SEND THE REQUEST
  ajaxRequest.send();
}

//How it works:
// 1. User clicks the Submit button → Triggers the getMsg() function
// 2. XMLHttpRequest object is created → Prepares to communicate with the server
// 3. Request is configured → Tells the browser to GET the content.html file
// 4. Request is sent → Browser fetches content.html in the background
// 5. State change occurs → When readyState becomes 4 (complete) and status is 200 (success)
// 6. Content is replaced → The entire content div is replaced with content.html
// 7. Onload fires → The personalized thank you message is inserted into the paragraph
