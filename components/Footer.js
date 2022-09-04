import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h2 className={styles.heading}>Contributors:</h2>
            <div className={styles.contributors}>
                <div>
                    <div className={styles.name}>Sarthak Vaish</div>
                    <div className={styles.role}>Front-End</div>
                    <div className={styles.email}>sarthak@gmail.com</div>
                </div>
                <div>
                    <div className={styles.name}>Ansh Saxena</div>
                    <div className={styles.role}>Blockchain</div>
                    <div className={styles.email}>anshspvt@gmail.com</div>
                </div>
                <div>
                    <div className={styles.name}>Ashish Chaudhary</div>
                    <div className={styles.role}>UI/UX</div>
                    <div className={styles.email}>ashish080303@gmail.com</div>
                </div>
            </div>
        </div>
    );
}
