window.addEventListener("load", function () {
  // 애니메이션으로 바꿔야함. sidebar 안쪽 구조 좀 건드려야함.
  window.addEventListener("load", function () {
    const sidebar = {
      sidebarWrap: document.querySelector(".sidebar-wrap"),
      icoToggle: document.querySelector(".ico-toggle"),
      sidebarWrapInner: document.querySelector(".sidebar-wrap-inner"),
    };
    const { sidebarWrap, icoToggle, sidebarWrapInner } = sidebar;
    sidebarWrap.addEventListener("click", (e) => {
      if (e.target.className === "sidebar-wrap") {
        sidebarWrap.style.display = "none";
        sidebarWrapInner.classList.remove("sidebar-show");
      }
    });
    icoToggle.addEventListener("click", () => {
      sidebarWrap.style.display = "block";
      sidebarWrapInner.classList.add("sidebar-show");
    });
  });
});
