// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};
//FIXME don't change the font size, make it change only the header height
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#subscribe-box>h3").style.display = "none";
    document.querySelector("#subscribe-box>p").style.display = "none";
    document.querySelector("header").style.maxHeight = "80px";
  } else {
    document.querySelector("#subscribe-box>h3").style.display = "block";
    document.querySelector("#subscribe-box>p").style.display = "block";
    document.querySelector("header").style.maxHeight = "160px";
  }
}