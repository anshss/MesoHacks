import styles from "../styles/Home.module.css";
import NewsSection from "../components/newsSection";
import Slider from "./slider";

export default function Home() {
  return (
    <div className={styles.container}>

      <NewsSection />
      {/* <Slider /> */}
    </div>
  );
}
