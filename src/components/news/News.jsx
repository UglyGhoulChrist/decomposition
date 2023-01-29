import React from "react";
import { newsNow, newsRussia, newsRecommend } from "../../data/data.js";
import NewsStoryList from "./NewsStoryList.jsx";
import NewsTabsItem from "./NewsTabsItem.jsx";
import NewsTabsList from "./NewsTabsList.jsx";

/**
 * @description Блок новостей
 */

function News() {
  return (
    <div>
      <NewsTabsList>
        <NewsTabsItem typeNews={Object.keys(newsNow)} />
        <NewsTabsItem typeNews={Object.keys(newsRussia)} />
        <NewsTabsItem typeNews={Object.keys(newsRecommend)} />
      </NewsTabsList>
      <NewsStoryList newsList={newsRussia["В России"]} />
    </div>
  );
}

export default News;
