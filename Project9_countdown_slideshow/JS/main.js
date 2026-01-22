// Slideshow JavaScript

// Set the starting slide index
let slideIndex = 1;
showSlides(slideIndex);


// Move forward or backward through slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Jump directly to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function that displays the correct slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

     // Wrap around if slide number goes out of range
    if (n > slides.length) {slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length }
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

      // Show the current slide and highlight its dot
    slides[slideIndex - 1].style.display = " block";
    dots[slideIndex - 1].className += " active";
}

// Countdown JavaScript
function countdown() {
    // Get the number of seconds from the input field
    var seconds = document.getElementById("seconds").value;

    // Inner function that runs every second
    function tick() {
        // Decrease seconds by 1
        seconds = seconds - 1;

        // Display the updated time
        document.getElementById("timer").innerHTML = seconds;

        // Schedule the next tick
        var time = setTimeout(tick, 1000);

        // When countdown reaches -1, stop timer and alert user
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }

    // Start the countdown
    tick();
}
