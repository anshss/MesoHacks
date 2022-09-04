import { useState, useEffect } from "react";
import { contractAddress } from "../address.js";
import contractAbi from "../artifacts/contracts/NewsDapp.sol/NewsDapp.json";
import web3modal from "web3modal";
import { ethers } from "ethers";
import Slider from "./Slider";

export default function Home() {
  const [news, setNews] = useState([
    {
      address: "0xdd3ddadsadd",
      title: "Saving and investing higher priorities than spending right now:",
      content:
        "Even amongst our highest and most frequent spenders, we see a sudden increase in use of Tag Spends, Save in Pots, and No-Penalty SIP for investments said Jupiter, a 100% digital banking and investing app. Users are tracking expenses with Custom Tags and Categories and are prioritizing saving and investing more towards their goals, more than ever before, added Jupiter.",
      time: "",
      upvote: 21,
      tokenId: 1,
    },
    {
      address: "0xdd3ddadsadd",
      title:
        "Incorrect to suggest otherwise: TCS on reports of no pay hike for experienced staff",
      content:
        "Tata Consultancy Services (TCS) responded after media reports claimed that the IT major has revised its anniversary appraisal policy and will not be rolling out hikes to employees who have completed one year. TCS said, It's incorrect to suggest otherwise. All experienced hires will be given an increase as part of the annual salary appraisal that follows their one-year anniversary.",
      time: "",
      upvote: 12,
      tokenId: 2,
    },
    {
      address: "0xdd3ddadsadd",
      title: "OnlyFans pays $517 million in dividends to its owner in 2 years",
      content:
        "Adult content subscription platform OnlyFans paid its owner Leonid Radvinsky $517 million in dividends in the last two years, the company's accounts revealed. The 40-year-old Ukrainian-American executive is the sole shareholder of OnlyFans' holding company. Notably, OnlyFans posted pre-tax profits of $433 million in the year ended November 30, while its creators made nearly $4 billion in 2021",
      time: "",
      upvote: 41,
      tokenId: 3,
    },
    {
      address: "0xdd3ddadsadd",
      title:
        "Layoffs a chance to prove haters wrong, says Snap CEO amid 20% job cuts: Report",
      content:
        "In a meeting held with employees after he confirmed 20% job cuts, Snap CEO Evan Spiegel reportedly said that while this was a setback, it was a chance to prove the haters wrong. Some employees said that the alleged statement didn't help the meeting's tone and mood. Snap is laying off around 1,200 employees to reduce costs amid weak revenue.",
      time: "",
      upvote: 1,
      tokenId: 3,
    },
  ]);

  useEffect(() => {
    fetchNews();
  }, []);

  // fetches articles from contract
  const fetchNews = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.infura.io/v3/1dbc3ef8703a4669a5cda4f7de7343bc"
    );
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
    console.log(cards);
    // setNews(cards);
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
    const msgValue = ethers.utils.formatUnits(supportPrice, 18);
    const data = await contract.transferSupport(tokenId, {
      value: msgValue,
    });
    await data.wait();
  };

  return (
    <div>
      <Slider newsData={news} />
    </div>
  );
}
