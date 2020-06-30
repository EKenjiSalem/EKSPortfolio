$(document).ready(function() {
// This enables the toggler button to go from 3 bars to an x 
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  // Fixing the navbar
  $(window).scroll(function() {
    // This refers to the window. Keeps track of the position of the window
    let position = $(this).scrollTop();
  // 149 is the heights of the header and navbar. The classes are applied after the header and navbar
 // This means, if the position of the while scrolling is greater than 149, then fix the navbar to the top  of the page. else, if less than 149 then remove the classes.
 //  The fixed-top class in the html would only keep the navbar at the very top. this allows the bottom navbar to be fixed after scrolling past both navbars
  if (position >= 149) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  /* Smooth Scroll
  $(".nav-item a").click(function(link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
    // .stop(), stops the previous click
      .stop().animate({
          scrollTop: $(target).offset().top}, 3000);
    $(".navbar-toggler").toggleClass("change");
    $("#myNavbar").collapse("hide");
   }); */

  // Isotope
  let $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function() {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });
  // Image Loader
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
});
