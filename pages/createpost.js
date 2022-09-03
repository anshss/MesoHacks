import styles from "../styles/Createpost.module.css";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    time: "",
  });
  const [wordsCount, setWordsCount] = React.useState(0);
  const [error, setError] = React.useState("");
  const handelTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/).length;
    setWordsCount(words);
    if (words <= 60) setFormData({ ...formData, content: text });
    else setError("Please describe less than 60 words only");
  };
  const handelSubmit = () => {
    if (formData.title != "" && formData.content != "") {
      setError("");
      document.getElementById("submit-button").disabled = true;
      const DateTime = new Date();
      latestData = { ...formData, time: DateTime.toISOString() };
      console.log(latestData);
    } else setError("Do not left fields empty");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Create a post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.heading}>Create your post here!</h1>
        <div className={styles.postCard}>
          <div className={styles.fields}>
            <label>Title</label>
            <input
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
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
