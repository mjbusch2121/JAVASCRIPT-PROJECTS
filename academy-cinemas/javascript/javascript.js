// Initializes popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='"+ imgSrc +"'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// Initialize toasts only if they exist
const toastElList = document.querySelectorAll('.toast')
if (toastElList.length > 0) {
    toastElList.forEach(toastEl => new bootstrap.Toast(toastEl))
}

// FUNCTION TO DISPLAY TOAST WITH SELECTED OPTIONS
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

// JQUERY
// SHRINKS HEADER SIZE WHEN THE DOCUMENT IS SCROLLED DOWN BY 80 pixels
$(document).on("scroll", function (){
    // WHEN WEBPAGE IS SCROLLED DOWN FROM THE TOP BY 50PX THIS IF STATEMENT WILL TRIGGER
    if($(document).scrollTop() > 50) {
        // ONCE THE 50PX REQUIREMENT HAS BEEN MET ADD THE NAV-SHRINK CLASS SELECTOR TO THE SAME HTML ELEMENT 
        // THAT HAS THE NAV CLASS
        $("nav").addClass("nav-shrink");
        // ADJUST THE POSITION OF THE MOBILE DROP MENU TO ACCOMODATE THE NEW HEIGHT DECREASE
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        // IF THE WEBPAGE HAS NOT BEEN SCROLLED DOWN OR IS BACK TO THE TOP THE NAV-SHRINK CLASS SELECTOR IS 
        // REMOVED FROM THE HTML ELEMENT WITH THE NAV CLASS SELECTOR
        $("nav").removeClass("nav-shrink");
        // THE MARGIN FOR THE DROP DOWN MENU IS NOW RETURNED TO IT'S ORIGINAL AMOUNT
        $("div.nav-bar-collapse").css("margin-top", "14px");
    }
});

// CLOSE MOBILE MENU WHEN A NAVIGATION LINK IS CLOSED
$(document).ready(function (){
    // ON CLICK WHEN AN ELEMENT CONTAINS JUST THE NAV-LINK CLASS AND NOT THE DROPDOWN-TOGGLE AND THEN ALSO
    // CLOSE WHEN AN ELEMENT WITH THE CLASS .DROPDOWN-ITEM (EACH MOVIE LINK) HAS BEEN CLICKED
    $(".nav-bar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function(){
        // COLLAPSE THE NAVBAR WHEN A LINK OR DROPDOWN ITEM IS CLICKED
        $(".navbar-collapse").collapse('hide');
    });
});