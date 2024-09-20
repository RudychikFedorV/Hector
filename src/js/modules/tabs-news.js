const tabsNews = () => {
  let tabNews;
  let contentNews;

  const initTabsNews = () => {
    tabNews = document.getElementsByClassName("news-top-tab");
    contentNews = document.getElementsByClassName("news-body-content");
    hideTabsContentNews(1);
  };

  const hideTabsContentNews = (a) => {
    for (let index = a; index < contentNews.length; index++) {
      contentNews[index].classList.remove("show");
      contentNews[index].classList.add("hide");
      tabNews[index].classList.remove("news-top-tab1");
    }
  };

  document.querySelector(".news-row").onclick = (event) => {
    const targetNews = event.target;
    if (targetNews.classList.contains("news-top-tab")) {
      for (let index = 0; index < tabNews.length; index++) {
        if (targetNews == tabNews[index]) {
          showTabsContentNews(index);
          break;
        }
      }
    }
  };

  const showTabsContentNews = (b) => {
    if (contentNews[b].classList.contains("hide")) {
      hideTabsContentNews(0);
      tabNews[b].classList.add("news-top-tab1");
      contentNews[b].classList.remove("hide");
      contentNews[b].classList.add("show");
    }
  };

  return { initTabsNews };
};

export default tabsNews;
