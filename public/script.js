

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

//easter egg alert (password is I WANT BUTTERFLY)
function secret() {
  let gate = prompt("Password? (ALL CAPS)");
  if (gate == "I WANT BUTTERFLY") {
    window.location.href = "Music.html";
  }
}

