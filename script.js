
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById('navbar').style.backgroundColor = "black";
      document.getElementById('navbar').style.boxShadow = "0px 0px 40px 0px black"
      
  } else {
      document.getElementById('navbar').style.backgroundColor = "transparent";
      document.getElementById('navbar').style.boxShadow = "none"
    
  }
}