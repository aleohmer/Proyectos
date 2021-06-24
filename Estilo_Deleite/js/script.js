
//******************************************************************//
//***                     SCROLL TO TOP BUTTON                   ***//
//******************************************************************//

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

//******************************************************************//
//***                      SLIDE DOWN NAVBAR                     ***//
//******************************************************************//

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "20";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }

$('.navbar').click(function() {
  $('nav').slideUp("slow");
});
$('.navbar').click(function() {
  $('nav').slideDown("slow");
});