import styles from "../styles/Home.module.css";
import NewsSection from "../components/newsSection";
import Footer from "../components/Footer";
import Slider from "./slider";
import First from "../components/First";
import Second from "../components/Second";

export default function Home() {
    return (
        <div className={styles.container}>
            <First />
            <Second />
            <NewsSection />
            {/* <Slider /> */}
            <Footer />
        </div>
    );
}
