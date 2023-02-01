/**
 * @description Новости разбитые по типу
 */

const newsGroup = [
  {
    group: "Сейчас в СМИ",
    list: [
      { icon: "icon1", title: "Сейчас в СМИ title1", link: "link1" },
      { icon: "icon2", title: "Сейчас в СМИ title2", link: "link2" },
      { icon: "icon3", title: "Сейчас в СМИ title3", link: "link3" },
    ],
  },
  {
    group: "В России",
    list: [
      { icon: "icon4", title: "В России title4", link: "link4" },
      { icon: "icon5", title: "В России title5", link: "link5" },
      { icon: "icon6", title: "В России title6", link: "link6" },
    ],
  },
  {
    group: "Рекомендуем",
    list: [
      { icon: "icon7", title: "Рекомендуем title7", link: "link7" },
      { icon: "icon8", title: "Рекомендуем title8", link: "link8" },
      { icon: "icon9", title: "Рекомендуем title9", link: "link9" },
    ],
  },
];

/**
 * @description Курсы валют
 */

const currencyList = [
  { name: "USD", course: 63.29, increment: 0 },
  { name: "EUR", course: 70.86, increment: -10 },
  { name: "GBR", course: 50.24, increment: 10 },
];

/**
 * @description Навигация формы поиска
 */
const searchNavigation = ["Поиск", "Картинки", "Видео", "Новости", "Маркет"];

/**
 * @description Нижняя секция
 */

const bottomSection = [
  {
    group: "Посещаемое",
    linkGroup: "linkGroup",
    list: [
      { title: "Посещаемое 1", link: "link1" },
      { title: "Посещаемое 2", link: "link2" },
      { title: "Посещаемое 3", link: "link3" },
    ],
  },
  {
    group: "Телепрограмма",
    linkGroup: "linkGroup",
    list: [
      { time: "10:00", title: "НТВ Соловьёв", link: "link4" },
      { time: "11:00", title: "СТС Воронины", link: "link5" },
      { time: "12:00", title: "РТР Новости", link: "link6" },
    ],
  },
  {
    group: "Эфир",
    linkGroup: "linkGroup",
    list: [
      { icon: "ico", title: "YouTube", link: "link7" },
      { icon: "ico", title: "Blogs", link: "link8" },
      { icon: "ico", title: "News", link: "link9" },
    ],
  },
];

export { newsGroup, currencyList, searchNavigation, bottomSection };
