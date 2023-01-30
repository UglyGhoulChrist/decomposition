import { useState } from "react";
import { newsGroup } from "../../data/data.js";
import NewsStoryList from "./NewsStoryList.jsx";
import NewsTabsList from "./NewsTabsList.jsx";
import "./News.css";

/**
 * @description Блок новостей
 */

function News() {
  const [activeGroup, setActiveGroup] = useState(0);

  const handleClick = (idx) => {
    setActiveGroup(idx);
  };
  return (
    <div className="news">
      <NewsTabsList handleClick={handleClick} newsGroup={newsGroup} />
      <NewsStoryList newsList={newsGroup[activeGroup]} />
    </div>
  );
}

export default News;
