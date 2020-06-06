(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

fetch("http://localhost:4000/salesInvoice/InvoiceCreditYear",{
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  },       
  method: 'GET'
}).then(
response=>{
  if(response.ok){
    return response.json();
  }else{
    throw new Error("something went wrong");
  }
}
).then(result=>{
  document.getElementById("FatAnual").innerHTML = result[0].TotalCredit + "€";
});


fetch("http://localhost:4000/invoice/mediaVendasAno/2020",{
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  },       
  method: 'GET'
}).then(
response=>{
  if(response.ok){
    return response.json();
  }else{
    throw new Error("something went wrong");
  }
}
).then(result=>{
  document.getElementById("mediaMensal").innerHTML = result[0].MediaDinheiro.toFixed(2) + "€";
});




