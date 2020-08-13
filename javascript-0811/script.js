let subMenu = document.querySelector(".add");

function handleMenu() {
  subMenu.classList.toggle("show");
}

// let slides = document.getElementsByClassName("image");

// function showSlides(n) {
//   let i = 0;
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

let content = document.querySelectorAll("#imgContent");
let user = document.querySelectorAll("#userInfo");

content.addEventListener(
  "mouseover",
  (myFunction = () => {
    user.style.display = "block";
  })
);
content.addEventListener(
  "mouseout",
  (myThirdFunction = () => {
    user.style.display = "none";
    content.style.display = "block";
  })
);

var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".grid-item",
  columnWidth: 200,
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry(".grid", {
  // options
});

var msnry = new Masonry(".grid", {
  columnWidth: 200,
  itemSelector: ".grid-item",
});
