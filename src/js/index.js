// import { initializeDropdown } from "./modules/dropdown.js";
// initializeDropdown();

import swiperAdvertising from "./modules/swiper-advertising.js";
swiperAdvertising();

import tabsNew from "./modules/tabs-new.js";
import tabsNews from "./modules/tabs-news.js";
document.addEventListener('DOMContentLoaded', () => {
    const { initTabsNew } = tabsNew();
    const { initTabsNews } = tabsNews();
    initTabsNew();
    initTabsNews();
  });
