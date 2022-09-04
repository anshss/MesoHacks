import styles from "../styles/News.module.css";
import { useState, useEffect } from "react";
import { contractAddress } from "../address.js";
import contractAbi from "../artifacts/contracts/NewsDapp.sol/NewsDapp.json";
import web3modal from "web3modal";
import { ethers } from "ethers";
import Slider from "./Slider";

export default function Third({ newsUpdate }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, [news]);

  useEffect(() => {
    newsUpdate(news);
  }, [news]);

  const infuraId = process.env.NEXT_PUBLIC_INFURA;

  // fetches articles from contract
  const fetchNews = async () => {
    // const provider = new ethers.providers.JsonRpcProvider(
    //   `https://polygon-mumbai.infura.io/v3/${infuraId}}`
    // );
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      provider
    );
    const data = await contract.fetchNews();
    const cards = await Promise.all(
      data.map(async (i) => {
        let card = {
          address: i.author,
          title: i.title,
          content: i.content,
          time: i.time,
          upvote: i.upvote.toNumber(),
          tokenId: i.tokenId.toNumber(),
        };
        return card;
      })
    );
    setNews(cards);
  };

  //increases upvote on a news article
  const increaseUpvote = async (tokenId) => {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      signer
    );
    const data = await contract.increaseUpvote(tokenId);
    await data.wait();
  };

  //transfers 1 Matic from user wallet to author wallet
  const transferSupport = async (tokenId) => {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      signer
    );
    const supportPrice = 1;
    const msgValue = ethers.utils.parseUnits(supportPrice.toString(), "ether");
    const data = await contract.transferSupport(tokenId, {
      value: msgValue,
    });
    await data.wait();
  };

  return (
    <div className={styles.news}>
      <h1 className={styles.divHeading}>Latest Articles:</h1>
      <Slider
        transferSupport={transferSupport}
        increaseUpvote={increaseUpvote}
        newsData={news}
      />
    </div>
  );
}
