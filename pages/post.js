import styles from "../styles/Post.module.css";
import { contractAddress } from "../address.js";
import contractAbi from "../artifacts/contracts/NewsDapp.sol/NewsDapp.json";
import web3modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Post() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    time: "",
  });
  const [wordsCount, setWordsCount] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter()

  //handles input
  const handelTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/).length;
    setWordsCount(words);
    if (words <= 60) setFormData({ ...formData, content: text });
    else setError("Please describe less than 60 words only");
  };

  //fires on clicking submit button
  const handelSubmit = () => {
    if (formData.title != "" && formData.content != "") {
      setError("");
      document.getElementById("submit-button").disabled = true;
      const DateTime = new Date();
      const latestData = { ...formData, time: DateTime.toISOString() };
      console.log(latestData);
      callContract(latestData.title, latestData.content, latestData.time);
    } else setError("Do not left fields empty");
  };

  //calls contract
  const callContract = async (_title, _content, _time) => {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      signer
    );
    const createNews = await contract.createNews(_title, _content, _time);
    await createNews.wait();
    router.push('/')
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Create your post here!</h1>
        <div className={styles.postCard}>
          <div className={styles.fields}>
            <label>Title</label>
            <input
              onChange={(event) =>
                setFormData({
                  ...formData,
                  title: event.target.value,
                })
              }
              placeholder="Give the title for the post here!"
              type="text"
              value={formData.title}
            />
          </div>
          <div className={styles.fields}>
            <label>Description</label>
            <textarea
              value={formData.content}
              onChange={handelTextareaChange}
              rows={10}
              placeholder="Describe your story in 60 words!"
              type="text"
            />
          </div>
          <p className={styles.error}>{error}</p>
          <p className={styles.words}>words {wordsCount}/60</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            id="submit-button"
            onClick={handelSubmit}
            className={styles.button}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
