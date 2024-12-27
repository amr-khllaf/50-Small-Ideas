const panels = document.querySelectorAll(".panel"); // NodeList
// console.log(panels);
// console.log(panels[4]);
for (var i = 0; i < panels.length; i++) {
  var panel = panels[i];
  //   console.log(panels[i]);
  panel.addEventListener("click", function (e) {
    // console.log(e.target);
    removeActiveClass();
    e.target.classList.add("active");
  });
}
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
