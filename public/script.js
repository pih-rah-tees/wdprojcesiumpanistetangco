//brush for draw canvas *not working
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");
const drawing = (e) => {
  ctx.lineto(e.offsetX, e.offsetY);
  ctx.stroke();
};
canvas.addEventListener("mousemove", drawing);

//works and is for the design button color change
function buttonFunc(a) {
  var id = "pattern" + a;
  if (id == "pattern1") {
    document
      .getElementById("pattern1")
      .setAttribute("style", "background-color: #ad88c6;");
    document
      .getElementById("pattern2")
      .setAttribute("style", "background-color: #E1AFD1;");
    document
      .getElementById("pattern3")
      .setAttribute("style", "background-color: #E1AFD1;");
  } else if (id == "pattern2") {
    document
      .getElementById("pattern1")
      .setAttribute("style", "background-color: #E1AFD1;");
    document
      .getElementById("pattern2")
      .setAttribute("style", "background-color: #ad88c6;");
    document
      .getElementById("pattern3")
      .setAttribute("style", "background-color: #E1AFD1;");
  } else {
    document
      .getElementById("pattern1")
      .setAttribute("style", "background-color: #E1AFD1;");
    document
      .getElementById("pattern2")
      .setAttribute("style", "background-color: #E1AFD1;");
    document
      .getElementById("pattern3")
      .setAttribute("style", "background-color: #ad88c6;");
  }
}
