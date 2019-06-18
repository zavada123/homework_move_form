let krug = document.querySelector(".krug");
let body = document.querySelector("body");
let obl = document.querySelector(".nasha-oblast");

let mousePosX = null;
let mousePosY = null;

let move = function(e) {
  let dragArea = obl.getBoundingClientRect();
  //значение ширины от нашей области до границ страници
  let dragAreaLeft = dragArea.left;
  //значение высоты от нашей области до границ страници
  let dragAreaTop = dragArea.top;
  let kvadratLeft = krug.getBoundingClientRect().left - dragAreaLeft;
  let kvadratTop = krug.getBoundingClientRect().top - dragAreaTop;
  // console.log(`layerX - ${e.layerX}, kvadratLeft - ${kvadratLeft}, пширинаквадрата - ${krug.clientWidth} `)
  if (e.target == krug) {
    console.log(e.target);
    let left = kvadratLeft + (e.layerX - mousePosX);
    let top = kvadratTop + (e.layerY - mousePosY);
    let bottom = dragArea.height - top - krug.clientHeight;
    let right = dragArea.width - left - krug.clientWidth;
    if (left > 0 && right > 0 && left < dragArea.width) {
      krug.style.left = left + "px";
    }
    if (top > 0 && bottom > 0 && top < dragArea.height) {
      krug.style.top = top + "px";
    }
  }
  
};

krug.addEventListener("mousedown", function(e) {
  mousePosX = e.layerX;
  mousePosY = e.layerY;
  obl.addEventListener("mousemove", move);
  // krug.addEventListener('mousemove', move);
  body.classList.add("dragging");
});

obl.addEventListener("mouseup", function() {
  obl.removeEventListener("mousemove", move);
  // krug.removeEventListener('mousemove', move);
  body.classList.remove("dragging");
});

krug.addEventListener("mouseup", function() {
  obl.removeEventListener("mousemove", move);
  // krug.removeEventListener('mousemove', move);
  body.classList.remove("dragging");
});
