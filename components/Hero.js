//article is the news article with most upvote

import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

export default function First() {

    useEffect(() => {
        findArticle
    }, [])

    const [article, setArticle] = useState({
        title: "Title for the News! Let's do it.",
        content: "The whole description for the news written by blah blah blah..."
    })

    async function findArticle() {}

    return(
        <div className={styles.hero}>
            <h1 className={styles.heading}>Article of the Day!</h1>
            <div className={styles.articleCard}>
                <div className={styles.article}>
                    <h1 className={styles.articleHeading}>{article.title}</h1>
                    <p className={styles.articleParagraph}>{article.content}</p>
                </div>
                <div className={styles.image}>
                    <img src="./heroimage.jpg" className={styles.imageElement}/>
                </div>
            </div>
        </div>
    )
}