const title = document.querySelector("#title");

const CLICKED = "clicked";

function handleClick() {
  //   const hasClass = title.classList.contains(CLICKED);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED);
  //   } else {
  //     title.classList.add(CLICKED);
  //   }
  title.classList.toggle(CLICKED);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
