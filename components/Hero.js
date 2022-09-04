//article is the news article with most upvote

import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

export default function First({ news }) {
  console.log("hero page news", news);
  const [article, setArticle] = useState({
    title: "",
    content: "",
    address: "",
  });

  useEffect(() => findArticle(), [news]);

  function findArticle() {
    var max = 0;
    var maxArticle = {};

    news.forEach((element) => {
      if (element.upvote > max) {
        maxArticle = element;
        max = element.upvote;
      }
    });
    setArticle(maxArticle);
  }
  console.log(article);
  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>Article of the Day!</h1>
      <div className={styles.articleCard}>
        <div className={styles.article}>
          <h1 className={styles.articleHeading}>{article.title}</h1>
          <p className={styles.articleParagraph}>{article.content}</p>
        </div>
        <div className={styles.image}>{/* <img src="./Naruto.jpg" /> */}</div>
      </div>
    </div>
  );
}
