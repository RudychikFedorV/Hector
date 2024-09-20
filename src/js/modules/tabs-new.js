const tabsNew = () => {
  let tab;
  let content;

  const initTabsNew = () => {
    tab = document.getElementsByClassName("new-top-tab");
    content = document.getElementsByClassName("new-body-content");
    hideTabsContent(1);
  };

  const hideTabsContent = (a) => {
    for (let index = a; index < content.length; index++) {
      content[index].classList.remove("show");
      content[index].classList.add("hide");
      tab[index].classList.remove("new-top-tab1");
    }
  };

  document.querySelector(".new-row").onclick = (event) => {
    const target = event.target;
    if (target.classList.contains("new-top-tab")) {
      for (let index = 0; index < tab.length; index++) {
        if (target == tab[index]) {
          showTabsContent(index);
          break;
        }
      }
    }
  };

  const showTabsContent = (b) => {
    if (content[b].classList.contains("hide")) {
      hideTabsContent(0);
      tab[b].classList.add("new-top-tab1");
      content[b].classList.remove("hide");
      content[b].classList.add("show");
    }
  };

  return { initTabsNew };
};

export default tabsNew;
