window.addEventListener("load", function (e) {
  const activeLine = document.querySelectorAll(".header-menu ul li");

  function activeLines() {
    // 일단 해놓긴 했는데 다음에 해놓을 땐 좀 깔끔하게 만들어야 될듯함.
    activeLine.forEach(function (line) {
      line.addEventListener("click", function (e) {
        // 클래스가 있는애를 클릭하면 forEach 더이상 안돌게 해놓음.
        const targetClassName = e.target.className;
        if (targetClassName === "active-line") return;
        activeLine.forEach(function (line) {
          line.classList.remove("active-line");
        });
        line.classList = "active-line";
      });
    });
  }
  activeLines();
});
