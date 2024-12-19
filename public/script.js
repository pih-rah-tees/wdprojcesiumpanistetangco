class Picker {
  constructor(target, width, height) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.target.width = width;
    this.target.height = height;
    this.target.getContext("2d");
    this.pickerCircle = { x: 10, y: 10, width: 7, height: 7};
  }
}

draw() {
  
}

build() {
  let gradient = this.conext.createLinearGradient(0, 0,
this.width, 0);
  
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0.15, "rgb(255, 0, 255)");
  gradient.addColorStop(0.33, "rgb(255, 0, 0)");
  gradient.addColorStop(049, "rgb(255, 0, 0)");
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(0, "rgb(255, 0, 0)");
}

