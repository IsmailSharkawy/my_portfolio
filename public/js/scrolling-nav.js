// //jQuery to collapse the navbar on scroll
// $(window).scroll(function () {
//   if ($(".navbar").offset().top > 50) {
//     $(".navbar-fixed-top").addClass("top-nav-collapse");
//   } else {
//     $(".navbar-fixed-top").removeClass("top-nav-collapse");
//   }
// });

// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function () {
//   $("a.page-scroll").on("click", function (event) {
//     var $anchor = $(this);
//     var hash = $anchor.attr("href").split("#")[1]; // Extracts everything after the hash

//     if (hash) {
//       event.preventDefault();
//       var scrollToElement = $("#" + hash);
//       if (scrollToElement.length) {
//         $("html, body").stop().animate(
//           {
//             scrollTop: scrollToElement.offset().top,
//           },
//           1500,
//           "easeInOutExpo"
//         );
//       }
//     }
//   });
// });
