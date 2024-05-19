// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  //checks to see if the condition doesn't match the media queary, if it does it doesn't execute the function
  const mediaQuery = window.matchMedia('(max-width: 750px)');
  if (!mediaQuery.matches) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header").style.maxHeight = "80px";
      //adjusting the subscribe-box div
      document.querySelector("#subscribe-box>h3").style.display = "none";
      document.querySelector("#subscribe-box>p").style.display = "none";
    } else {
      document.querySelector("header").style.maxHeight = "100px";
      //adjusting the subscribe-box div
      document.querySelector("#subscribe-box>h3").style.display = "block";
      document.querySelector("#subscribe-box>p").style.display = "block";
    }
  }
}