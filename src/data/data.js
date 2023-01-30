/**
 * @description Новости разбитые по типу
 */

const newsNow = {
  "Сейчас в СМИ": [
    { icon: "icon1", title: "Сейчас в СМИ title1", link: "link1" },
    { icon: "icon2", title: "Сейчас в СМИ title2", link: "link2" },
    { icon: "icon3", title: "Сейчас в СМИ title3", link: "link3" },
  ],
};
const newsRussia = {
  "В России": [
    { icon: "icon4", title: "В России title4", link: "link4" },
    { icon: "icon5", title: "В России title5", link: "link5" },
    { icon: "icon6", title: "В России title6", link: "link6" },
  ],
};

const newsRecommend = {
  Рекомендуем: [
    { icon: "icon7", title: "Рекомендуем title7", link: "link7" },
    { icon: "icon8", title: "Рекомендуем title8", link: "link8" },
    { icon: "icon9", title: "Рекомендуем title9", link: "link9" },
  ],
};

const currencyList = [
  { name: "USD", course: 1, increment: 0 },
  { name: "RUB", course: 10, increment: 10 },
  { name: "EUR", course: 1, increment: -10 },
];

const searchNavigation = ["Поиск", "Картинки", "Видео", "Новости", "Маркет"];

export { newsNow, newsRussia, newsRecommend, currencyList, searchNavigation };
