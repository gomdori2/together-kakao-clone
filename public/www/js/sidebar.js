window.addEventListener("load", function () {
  console.log("asdasdasd");
  // 애니메이션으로 바꿔야함. sidebar 안쪽 구조 좀 건드려야함.
  const sidebar = {
    sidebarWrap: document.querySelector(".sidebar-wrap"),
    icoToggle: document.querySelector(".ico-toggle"),
    sidebarWrapInner: document.querySelector(".sidebar-wrap-inner"),
  };
  const { sidebarWrap, icoToggle, sidebarWrapInner } = sidebar;
  sidebarWrap.addEventListener("click", (e) => {
    console.log("aaa");
    if (e.target.className === "sidebar-wrap") {
      sidebarWrap.classList.remove("sidebar-show");
    }
  });
  icoToggle.addEventListener("click", () => {
    console.log("aaa");
    sidebarWrap.classList.add("sidebar-show");
  });
});
