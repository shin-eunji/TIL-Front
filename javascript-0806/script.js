// // headingTag 태그
// let headingTag = document.querySelector("h1");
// headingTag.textContent = "Hello World!!!";

// 조건문
// let iceCream = "chocolatel";
// if (iceCream == "chocolate") {
//   console.log("아이스크림이 맞습니다.");
// } else {
//   console.log("아이스크림이 아닙니다.");
// }

// 함수
// function multipy(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// console.log(multipy(10, 20));
// console.log(multipy(15, 19));
// console.log(multipy(31, 53));

// 이벤트
// let myHtml = document.querySelector("html");
// myHtml.onclick = function () {
// };

// - 클릭 이벤트
// let btnClick = document.getElementById("btnClick");

// btnClick.addEventListener("click", (e) => {
//   btnClick.innerHTML = `클릭한 숫자: ${e.detail}`;
// });

// - mousedown event
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("Canvas");
const context = myPics.getContext("2d");

myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
