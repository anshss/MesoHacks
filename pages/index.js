import styles from "../styles/Home.module.css";
import { useState } from "react";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  const [news, setNews] = useState([]);
  return (
    <div className={styles.container}>
      <Hero news={news} />
      <Quote />
      <News newsUpdate={setNews} />
      <Footer />
    </div>
  );
}
