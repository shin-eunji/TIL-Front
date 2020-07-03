let tabList = document.querySelectorAll(".tab_list");

Array.prototype.forEach.call(tabList, function (list) {
  list.children[0].addEventListener("click", function (e) {
    e.preventDefault();

    let tabContent = document.querySelectorAll(".tab_content");
    let tabNum = this.parentElement.getAttribute("data-tabnum");

    Array.prototype.forEach.call(tabContent, function (cont, i) {
      cont.style.display = "none";
    });
    tabContent[tabNum].style.display = "block";

    if (list.className.indexOf("active") == -1) {
      list.className = "tab_list active";
    }
  });
});
