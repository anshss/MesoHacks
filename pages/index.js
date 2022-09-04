import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Quote />
      <News />
      <Footer />
    </div>
  );
}
