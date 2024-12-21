$(document).ready(function(){
  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});


window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight
}) 
                        

const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");


const drawing = (e) => {
  ctx.lineto(e.offsetX, e.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousemove", drawing);

