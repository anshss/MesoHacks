//article is the news article with most upvote
import { contractAddress } from "../address.js";
import contractAbi from "../artifacts/contracts/NewsDapp.sol/NewsDapp.json";
import web3modal from "web3modal";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

export default function First({ news }) {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    address: "",
  });

  useEffect(() => {
    findArticle();
  }, [article]);

  // function findArticle() {
  //   var max = 0;
  //   var maxArticle = {};
  //   news.forEach((element) => {
  //     if (element.upvote > max) {
  //       maxArticle = element;
  //       max = element.upvote;
  //     }
  //   });
  //   setArticle(maxArticle);
  // }


  async function findArticle() {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      provider
    );
    const data = await contract.mostUpvote();
    setArticle(data);
  }

  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>Article of the Day!</h1>
      <div className={styles.articleCard}>
        <div className={styles.article}>
          <h1 className={styles.articleHeading}>{article.title}</h1>
          <p className={styles.articleParagraph}>{article.content}</p>
        </div>
        <div className={styles.image}>
          <img src="./heroimage.jpg" className={styles.imageElement} />
        </div>
      </div>
    </div>
  );
}
