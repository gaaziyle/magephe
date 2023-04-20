
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



document.getElementById('read_resume').addEventListener('click', () => {
  document.getElementById('blockquote').style.height = "auto";
  document.getElementById('read_resume').style.display = "none"
});
document.getElementById('read_resume_2').addEventListener('click', () => {
  document.getElementById('image2-8').style.height = "auto";
  document.getElementById('read_resume_2').style.display = "none"
});



const cardBoxPc = document.getElementById('card_box_pc'),
  cardBoxSparkles = document.getElementById('card_box_sparkles'),
  cardBoxCreate = document.getElementById('card_box_create'),
  cardBoxIceCream = document.getElementById('card_box_ice_cream'),
  cardBoxBook = document.getElementById('card_box_book'),
  cardBoxSchool = document.getElementById('card_box_school');

window.sr = new ScrollReveal();

sr.reveal('#card_box_pc', {
  delay: 300,
  reset: true
})
sr.reveal('#card_box_sparkles', {
  delay: 400,
  reset: true
})
sr.reveal('#card_box_create', {
  delay: 500,
  reset: true
})
sr.reveal('#card_box_ice_cream', {
  delay: 600,
  reset: true
})
sr.reveal('#card_box_book', {
  delay: 700,
  reset: true
})
sr.reveal('#card_box_school', {
  delay: 800,
  reset: true
})

