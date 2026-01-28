$(document).ready(function () {
  //shineLoop uses the animate event method by using the chaining technique to
  //utilize more than one event method in the same function
  function shineLoop() {
    $(".shine")
      .animate({ backgroundPositionX: "1600px" }, 3000)
      .animate({ backgroundPositionX: "-800px" }, 3000, function () {
        //Callback ensures next animation only starts after current one completes
        shineLoop();
      });
  }
  //Start the initial animation loop
  shineLoop();

  //Shrinks header size when the document is scrolled down by 50 pixels
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
      $("h1").addClass("header-scrolled");
    } else {
      $("h1").removeClass("header-scrolled");
    }
  });

  //Triggers the images to slide down to show each title one after the other
  //when the user's mouse enters the div area with the #classicCars ID
  $("#classicCars").on({
    mouseenter: function () {
      $("#titleOne").show(1000);
      $("#titleTwo").show(1500);
      $("#titleThree").show(2000);
    },

    //Triggers the images to slide up and hide each title one after the other
    //when the user's mouse leaves the div area with the #classicCars ID
    mouseleave: function () {
      $("#titleOne").hide(2000);
      $("#titleTwo").hide(1500);
      $("#titleThree").hide(1000);
    },
  });

  // jQuery EVENT: Click event on images
  // jQuery EFFECT: Fade effect when clicked
  $("img").on("click", function () {
    // Fade out the image quickly, then fade back in
    $(this).fadeOut(300).fadeIn(600);
  });

  //Creates a toggle effect on each FAQ question by checking each element's sibling
  //so they don't all display when one question is clicked
  $("div.question").on("click", function () {
    $(this).next().slideToggle("slow").siblings("div.answer").slideUp("slow");
  });
});
